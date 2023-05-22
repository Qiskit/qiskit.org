import { beforeEach, describe, expect, test } from "vitest";
import QampProjectsAirtableRecords from "../../hooks/qamp-projects-conversion-utils";

const fakeRecord = {
  get: (field: string) => {
    switch (field) {
      case "Cohort":
        return ["100"];
      case "Collaborators":
        return ["4"];
      case "Github Issue URL":
        return "https://example.com/github-issue";
      case "Mentees":
        return ["2", "3"];
      case "Mentors":
        return ["1", "2"];
      case "Name":
        return "Project Foo";
      default:
        return undefined;
    }
  },
};

const mockQampCohorts = [{ id: "100", name: "QAMP Spring 23" }];
const mockQampParticipants = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Doe" },
  { id: "3", name: "John Smith" },
  { id: "4", name: "Jane Smith" },
];

const mockRecordFields = {
  cohort: "Cohort",
  collaborators: "Collaborators",
  githubIssueUrl: "Github Issue URL",
  mentees: "Mentees",
  mentors: "Mentors",
  name: "Name",
};

describe("getters", () => {
  let qampProjectsAirtableRecords: QampProjectsAirtableRecords;

  beforeEach(() => {
    qampProjectsAirtableRecords = new QampProjectsAirtableRecords(
      "testApiKey",
      mockRecordFields,
      mockQampCohorts,
      mockQampParticipants
    );
  });

  test("gets the cohort from the record", () => {
    expect(qampProjectsAirtableRecords.getCohort(fakeRecord)).toEqual({
      name: "QAMP Spring 23",
    });
  });

  test("gets the collaborators from the record", () => {
    expect(qampProjectsAirtableRecords.getCollaborators(fakeRecord)).toEqual([
      { name: "Jane Smith" },
    ]);
  });

  test("gets the GitHub issue URL from the record", () => {
    expect(qampProjectsAirtableRecords.getGithubIssueUrl(fakeRecord)).toBe(
      "https://example.com/github-issue"
    );
  });

  test("gets the mentees from the record", () => {
    expect(qampProjectsAirtableRecords.getMentees(fakeRecord)).toEqual([
      { name: "Jane Doe" },
      { name: "John Smith" },
    ]);
  });

  test("gets the mentors from the record", () => {
    expect(qampProjectsAirtableRecords.getMentors(fakeRecord)).toEqual([
      { name: "John Doe" },
      { name: "Jane Doe" },
    ]);
  });

  test("gets the name from the record", () => {
    expect(qampProjectsAirtableRecords.getName(fakeRecord)).toBe("Project Foo");
  });

  test("gets the participants from a list of IDs", () => {
    expect(
      qampProjectsAirtableRecords.getParticipants(["1", "2"])
    ).toStrictEqual([{ name: "John Doe" }, { name: "Jane Doe" }]);
  });
});

describe("convertToQampProject", () => {
  let qampProjectsAirtableRecords: QampProjectsAirtableRecords;

  beforeEach(() => {
    qampProjectsAirtableRecords = new QampProjectsAirtableRecords(
      "testApiKey",
      mockRecordFields,
      mockQampCohorts,
      mockQampParticipants
    );
  });

  test("converts the record to a QAMP Project object", async () => {
    const qampProject = await qampProjectsAirtableRecords.convertToQampProject(
      fakeRecord
    );

    expect(qampProject).toEqual({
      cohort: { name: "QAMP Spring 23" },
      collaborators: [{ name: "Jane Smith" }],
      githubIssueUrl: "https://example.com/github-issue",
      mentees: [{ name: "Jane Doe" }, { name: "John Smith" }],
      mentors: [{ name: "John Doe" }, { name: "Jane Doe" }],
      name: "Project Foo",
    });
  });
});
