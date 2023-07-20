import axios from "axios";
import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  fetchMembers,
  fetchTiers,
} from "../../hooks/ecosystem-conversion-utils";

vi.mock("axios");

interface Member {
  name: string;
  tier: string;
  testsResults: string;
  stars?: number;
}

describe("fetchMembers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("axios");
  });

  const members = {
    data: {
      MAIN: {
        1: {
          name: "member3",
          tier: "MAIN",
          tests_results: "",
        },
        // this is a rare case but the code contemplates it.
        2: [
          {
            name: "member2",
            tier: "MAIN",
            tests_results: "",
          },
        ],
        3: {
          name: "member1",
          tier: "MAIN",
          tests_results: "",
        },
      },
    },
  };

  test("fetches members and formats them", async () => {
    const formattedMembers: (Member | Member[])[] = [
      {
        name: "member1",
        tier: "MAIN",
        testsResults: "",
        stars: 0,
      },
      {
        name: "member3",
        tier: "MAIN",
        testsResults: "",
        stars: 0,
      },
      [
        {
          name: "member2",
          tier: "MAIN",
          testsResults: "",
        },
      ],
    ];

    (axios.get as any).mockResolvedValueOnce(members);
    const result = await fetchMembers();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(formattedMembers);
  });

  test("throws error if api call fails", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    (axios.get as any).mockRejectedValueOnce("example error");
    await fetchMembers();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith("example error");
  });
});

describe("fetchTiers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("axios");
  });

  const tiers = [
    {
      name: "Main",
      description: "The main Qiskit packages maintained by IBM Quantum",
    },
    {
      name: "Extensions",
      description: "IBM Quantum supported Qiskit extensions",
    },
    {
      name: "Community",
      description:
        "Software packages supported by the Qiskit community, not maintained by IBM Quantum",
    },
  ];

  test("fetches tiers and formats them", async () => {
    (axios.get as any).mockResolvedValueOnce(tiers);
    const result = await fetchTiers();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(result);
  });

  test("throws error if api call fails", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    (axios.get as any).mockRejectedValueOnce("example error");
    await fetchTiers();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith("example error");
  });
});
