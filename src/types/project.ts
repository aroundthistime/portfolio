import { YYYYMMStr } from "./date";
import { RangeObject } from "./number";
import { TechSkill } from "./techSkill";

export interface Screenshot {
  src: string;
  description?: string;
}

export type Project = Readonly<{
  id: string;
  title: string;
  summary: string;
  links: {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
  };
  iconUrl: string;
  screenshots: {
    type: 'landscape' | 'portrait';
    images: ReadonlyArray<Screenshot>;
  }
  tags: string[];
  techSkillsUsed: ReadonlyArray<TechSkill>;
  techSkillsExposed: ReadonlyArray<TechSkill>
  detailedExplanation: string;
  features: ReadonlyArray<{
    name: string;
    description: string;
    myContribution: boolean;
  }>;
  teamSize: number | RangeObject;
  role?: string;
  period: {
    startDate: YYYYMMStr;
    /**
     * will be undefined if the project is still ongoing
     */
    endDate?: YYYYMMStr;
  }
  troubleshoots?:ReadonlyArray<{
    title: string;
    problem: string;
    solution: string;
  }>
}>