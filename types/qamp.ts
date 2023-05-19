interface QampCohort {
  id?: string;
  name: string;
}

interface QampParticipant {
  id?: string;
  name: string;
}

interface QampProject {
  cohort: QampCohort;
  collaborators: QampParticipant[];
  githubIssueUrl: string;
  mentees: QampParticipant[];
  mentors: QampParticipant[];
  name: string;
}

export { QampCohort, QampParticipant, QampProject };
