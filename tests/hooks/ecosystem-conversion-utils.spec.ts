import axios from "axios";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { fetchMembers } from "../../hooks/ecosystem-conversion-utils";

vi.mock("axios");

describe("fetchMembers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const members = {
    data: {
      MAIN: {
        1: {
          name: "member1",
          tier: "MAIN",
          tests_results: "",
        },
      },
    },
  };

  test("fetches members and formats correctly", async () => {
    const formattedMembers: {
      name: string;
      tier: string;
      testsResults: string;
    }[] = [
      {
        name: "member1",
        tier: "MAIN",
        testsResults: "",
      },
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
