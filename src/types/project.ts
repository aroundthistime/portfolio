import { NonEmptyArray } from "./array";
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
    images: Readonly<NonEmptyArray<Screenshot>>;
  }
  tags: Readonly<NonEmptyArray<string>>;
  techSkillsUsed: Readonly<NonEmptyArray<TechSkill>>;
  techSkillsExposed: Readonly<NonEmptyArray<TechSkill>>
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
  troubleshoots?:Readonly<NonEmptyArray< {
    title: string;
    problem: string;
    solution: string;
  }>>;
}>