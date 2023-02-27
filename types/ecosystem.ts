interface TestResult {
  testType: string;
  passed: boolean;
  package: string;
  packageVersion: string;
  terraVersion: string;
  timestamp: number;
  logsLink: string;
  packageCommitHash: string;
}

interface Member {
  name: string;
  url: string;
  description: string;
  licence: string;
  contactInfo: string | null;
  alternatives: string | null;
  affiliations?: string | null;
  labels: string[];
  createdAt: number;
  updatedAt: number;
  testsResults: TestResult[];
  stylesResults?: any[];
  coveragesResults?: any[];
  configuration?: {
    language: {
      name: string;
      versions: string[];
    };
    dependenciesFiles: string[];
    extraDependencies: string[];
    testsCommand: string[];
    stylesCheckCommand: string[];
    coveragesCheckCommand: string[];
  } | null;
  historicalTestResults?: any[];
  tier: string;
  skipTests: boolean;
  stars: number;
}

interface Tier {
  name: string;
  description: string;
}

export { Member, Tier };
