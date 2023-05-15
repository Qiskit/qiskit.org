interface QampCohort {
  name: string;
}

interface QampParticipant {
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

export { QampProject };
