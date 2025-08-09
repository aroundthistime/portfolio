import { NonEmptyArray } from "./array";
import { YYYYMMStr } from "./date";
import { RangeObject } from "./number";
import { TechSkill } from "./techSkill";

export type ScreenshotOrientation = 'landscape' | 'portrait';

interface ScreenshotBase {
  type: 'image' | 'video';
  src: string;
  description?: string;
}

interface ImageScreenshot extends ScreenshotBase {
  type: 'image';
}

interface VideoScreenshot extends ScreenshotBase {
  type: 'video';
  posterSrc: string;
}


export type Screenshot = ImageScreenshot | VideoScreenshot;

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
    orientation: ScreenshotOrientation;
    items: Readonly<NonEmptyArray<Screenshot>>;
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