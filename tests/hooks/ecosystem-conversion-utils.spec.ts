import axios from "axios";
import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  fetchMembers,
  fetchTiers,
} from "../../hooks/ecosystem-conversion-utils";
import { Member } from "../../types/ecosystem";

vi.mock("axios");

describe("fetchMembers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("axios");
  });

  const members: {
    data: { [key: string]: { [key: number]: Member | Member[] } };
  } = {
    data: {
      COMMUNITY: {
        1: {
          name: "community-member",
          tier: "Community",
          testsResults: [
            {
              testType: "development",
              passed: true,
              package: "",
              packageVersion: "",
              qiskitVersion: "",
              timestamp: 0,
              logsLink: "",
              packageCommitHash: "",
            },
          ],
          stars: 0,
          url: "https://example.com",
          description:
            "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
          licence: "",
          contactInfo: "",
          alternatives: null,
          labels: [],
          createdAt: 0,
          updatedAt: 0,
          skipTests: false,
        },
      },
      EXTENSIONS: {
        1: {
          name: "extensions-member",
          tier: "Extensions",
          testsResults: [
            {
              testType: "development",
              passed: true,
              package: "",
              packageVersion: "",
              qiskitVersion: "",
              timestamp: 0,
              logsLink: "",
              packageCommitHash: "",
            },
          ],
          stars: 0,
          url: "https://example.com",
          description:
            "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
          licence: "",
          contactInfo: "",
          alternatives: null,
          labels: [],
          createdAt: 0,
          updatedAt: 0,
          skipTests: false,
        },
      },
      MAIN: {
        1: {
          name: "member3",
          tier: "Main",
          testsResults: [
            {
              testType: "development",
              passed: true,
              package: "",
              packageVersion: "",
              qiskitVersion: "",
              timestamp: 0,
              logsLink: "",
              packageCommitHash: "",
            },
          ],
          stars: 0,
          url: "https://example.com",
          description:
            "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
          licence: "",
          contactInfo: "",
          alternatives: null,
          labels: [],
          createdAt: 0,
          updatedAt: 0,
          skipTests: false,
        },
        // this is a rare case but the code contemplates it.
        2: [
          {
            name: "member2",
            tier: "Main",
            testsResults: [
              {
                testType: "development",
                passed: true,
                package: "",
                packageVersion: "",
                qiskitVersion: "",
                timestamp: 0,
                logsLink: "",
                packageCommitHash: "",
              },
            ],
            stars: 0,
            url: "https://example.com",
            description:
              "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
            licence: "",
            contactInfo: "",
            alternatives: null,
            labels: [],
            createdAt: 0,
            updatedAt: 0,
            skipTests: false,
          },
        ],
        3: {
          name: "member1",
          tier: "Main",
          testsResults: [
            {
              testType: "development",
              passed: true,
              package: "",
              packageVersion: "",
              qiskitVersion: "",
              timestamp: 0,
              logsLink: "",
              packageCommitHash: "",
            },
          ],
          stars: 0,
          url: "https://example.com",
          description:
            "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
          licence: "",
          contactInfo: "",
          alternatives: null,
          labels: [],
          createdAt: 0,
          updatedAt: 0,
          skipTests: false,
        },
      },
    },
  };

  test("fetches members and formats them", async () => {
    const formattedMembers: (Member | Member[])[] = [
      [
        {
          name: "member2",
          tier: "Main",
          testsResults: [
            {
              testType: "development",
              passed: true,
              package: "",
              packageVersion: "",
              qiskitVersion: "",
              timestamp: 0,
              logsLink: "",
              packageCommitHash: "",
            },
          ],
          stars: 0,
          url: "https://example.com",
          description:
            "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
          licence: "",
          contactInfo: "",
          alternatives: null,
          labels: [],
          createdAt: 0,
          updatedAt: 0,
          skipTests: false,
        },
      ],
      {
        name: "member1",
        tier: "Main",
        testsResults: [
          {
            testType: "development",
            passed: true,
            package: "",
            packageVersion: "",
            qiskitVersion: "",
            timestamp: 0,
            logsLink: "",
            packageCommitHash: "",
          },
        ],
        stars: 0,
        url: "https://example.com",
        description:
          "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
        licence: "",
        contactInfo: "",
        alternatives: null,
        labels: [],
        createdAt: 0,
        updatedAt: 0,
        skipTests: false,
      },
      {
        name: "member3",
        tier: "Main",
        testsResults: [
          {
            testType: "development",
            passed: true,
            package: "",
            packageVersion: "",
            qiskitVersion: "",
            timestamp: 0,
            logsLink: "",
            packageCommitHash: "",
          },
        ],
        stars: 0,
        url: "https://example.com",
        description:
          "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
        licence: "",
        contactInfo: "",
        alternatives: null,
        labels: [],
        createdAt: 0,
        updatedAt: 0,
        skipTests: false,
      },
      {
        name: "extensions-member",
        tier: "Extensions",
        testsResults: [
          {
            testType: "development",
            passed: true,
            package: "",
            packageVersion: "",
            qiskitVersion: "",
            timestamp: 0,
            logsLink: "",
            packageCommitHash: "",
          },
        ],
        stars: 0,
        url: "https://example.com",
        description:
          "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
        licence: "",
        contactInfo: "",
        alternatives: null,
        labels: [],
        createdAt: 0,
        updatedAt: 0,
        skipTests: false,
      },
      {
        name: "community-member",
        tier: "Community",
        testsResults: [
          {
            testType: "development",
            passed: true,
            package: "",
            packageVersion: "",
            qiskitVersion: "",
            timestamp: 0,
            logsLink: "",
            packageCommitHash: "",
          },
        ],
        stars: 0,
        url: "https://example.com",
        description:
          "A ad sint quis omnis aperiam et. Cupiditate molestias voluptatibus repudiandae debitis ab omnis. Voluptas voluptatem ut facilis qui cum aspernatur voluptatem cupiditate quasi. Nemo voluptate sed possimus cumque dolores illo accusamus nobis occaecati.",
        licence: "",
        contactInfo: "",
        alternatives: null,
        labels: [],
        createdAt: 0,
        updatedAt: 0,
        skipTests: false,
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
