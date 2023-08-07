interface TestResult {
  testType: "development" | "last passing version" | "stable" | "standard";
  passed: boolean;
  package: string;
  packageVersion: string;
  terraVersion: string;
  timestamp: number;
  logsLink: string;
  packageCommitHash: string;
}

type StylesResults = {
  styleType: string;
  passed: boolean;
};

type CoveragesResults = {
  coverageType: string;
  passed: boolean;
};

type ProjectLanguage = {
  name: string;
  versions: string[];
};

type ProjectConfig = {
  language: ProjectLanguage;
  dependenciesFiles: string[];
  extraDependencies: string[];
  testsCommand: string[];
  stylesCheckCommand: string[];
  coveragesCheckCommand: string[];
};

type TierName = "Main" | "Extensions" | "Community";

interface Member {
  name: string;
  url: string;
  website?: string;
  description: string;
  licence: string;
  contactInfo: string | null;
  alternatives: string | null;
  affiliations?: string | null;
  labels: string[];
  createdAt: number;
  updatedAt: number;
  testsResults: TestResult[];
  stylesResults?: StylesResults[];
  coveragesResults?: CoveragesResults[];
  configuration?: ProjectConfig | null;
  historicalTestResults?: TestResult[];
  tier: TierName;
  skipTests: boolean;
  stars: number;
}

interface Tier {
  name: TierName;
  description: string;
}

export { Member, Tier, TierName };
