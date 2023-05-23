import Airtable from "airtable";
import { QampCohort, QampParticipant, QampProject } from "../types/qamp";
import { AirtableRecords } from "./airtable-conversion-utils";
import QampCohortsAirtableRecords from "./qamp-cohorts-conversion-utils";
import QampParticipantsAirtableRecords from "./qamp-participants-conversion-utils";

const RECORD_FIELDS_IDS = Object.freeze({
  cohort: "fldaIxSsaydaOCUGK",
  collaborators: "fldaoHhT2ttO35K7T",
  githubIssueUrl: "fldrZHw1f1nQwO9VX",
  mentees: "flda8motpH4gS5bns",
  mentors: "fldgBeYDL1YKSpkXy",
  name: "fldtLoW4vLVGzsGXa",
} as const);

const AIRTABLE_BASE_ID = "appjU5TOUDYPwBIqO";

class QampProjectsAirtableRecords extends AirtableRecords {
  protected qampCohorts: QampCohort[] = [];
  protected qampParticipants: QampParticipant[] = [];

  constructor(
    apiKey: string,
    recordFields?: Record<string, any>,
    qampCohorts?: QampCohort[],
    qampParticipants?: QampParticipant[]
  ) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Projects",
      "Grid view",
      undefined,
      recordFields
    );
    this.qampCohorts = qampCohorts || [];
    this.qampParticipants = qampParticipants || [];
  }

  async fetchProjects(): Promise<QampProject[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const qampCohortsAirtableRecords = new QampCohortsAirtableRecords(
      this.apiKey
    );
    this.qampCohorts = await qampCohortsAirtableRecords.fetchCohorts();

    const qampParticipantsAirtableRecords = new QampParticipantsAirtableRecords(
      this.apiKey
    );
    this.qampParticipants =
      await qampParticipantsAirtableRecords.fetchParticipants();

    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID);
    const qampProjects: QampProject[] = [];

    await base("Projects")
      .select({
        fields: Object.values(this.recordFields),
        sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage((records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const qampProject = this.convertToQampProject(record);
          qampProjects.push(qampProject);
        }
        nextPage();
      });

    return Promise.resolve(qampProjects);
  }

  convertToQampProject(record: any): QampProject {
    return {
      cohort: this.getCohort(record),
      collaborators: this.getCollaborators(record),
      githubIssueUrl: this.getGithubIssueUrl(record),
      mentees: this.getMentees(record),
      mentors: this.getMentors(record),
      name: this.getName(record),
    };
  }

  public getCohort(record: any): QampCohort {
    const cohortId = record.get(this.recordFields!.cohort)[0];
    const cohort = this.qampCohorts.find((cohort) => cohort.id === cohortId);
    return { name: cohort?.name || "" };
  }

  public getCollaborators(record: any): QampParticipant[] {
    return this.getParticipants(
      record.get(this.recordFields!.collaborators) || []
    );
  }

  public getGithubIssueUrl(record: any): string {
    return record.get(this.recordFields!.githubIssueUrl);
  }

  public getMentees(record: any): QampParticipant[] {
    return this.getParticipants(record.get(this.recordFields!.mentees) || []);
  }

  public getMentors(record: any): QampParticipant[] {
    return this.getParticipants(record.get(this.recordFields!.mentors) || []);
  }

  public getName(record: any): string {
    return record.get(this.recordFields!.name);
  }

  public getParticipants(ids: string[]): QampParticipant[] {
    const participants = this.qampParticipants.filter((participant) =>
      ids.includes(participant.id!)
    );
    return participants.map((participant) => ({ name: participant.name }));
  }
}

export default QampProjectsAirtableRecords;
