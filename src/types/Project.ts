import { Link } from './Link';
import { MultiDepthData } from './MultiDepthData';
import { Skill } from './Skill';

/**
 * Interface describing detailed information of a project
 */
export interface Project {
  /**
   * UUID of the project to distinguish from each other
   */
  uuid: string;

  /**
   * Title of the project
   */
  title: string;

  /**
   * Group of information as summary
   */
  summary: ProjectSummary;

  /**
   * Tech skills used in the project
   */
  skills: SkillUsedInProject[];

  /**
   * Content text giving the overall description of the project
   */
  content: string;

  /**
   * Features that were included in the implementation of the project
   */
  features: MultiDepthData<ProjectFeature>[];

  /**
   * Screenshots (could be videos also) to show the result of the project
   */
  screenshots?: ProjectScreenshots;
}

/**
 * First provided summary information of the project
 */
interface ProjectSummary {
  /**
   * Brief explanation of what this project is
   */
  brief: string;

  /**
   * Working period of this project
   */
  period: Period;

  /**
   * Links related to this project (eg. github, service link)
   */
  links?: Link[];
}

/**
 * Type for storing a period from a certain point of time to another.
 */
interface Period {
  /**
   * Point of time when this project has started (or when I started working for the project)
   */
  from: ProjectDateInfo;

  /**
   * Point of time when this project has been completed (or when I stopped working for the project).
   * This could be undefined if you're trying to say something that has started and still lasts
   */
  till?: ProjectDateInfo;
}

/**
 * Type for saving date related to project.
 * Stores only year and the month
 */
export interface ProjectDateInfo {
  year: number;
  month: number;
}

/**
 * Skill that was used in the project (could be skill that I haven't used actually)
 */
interface SkillUsedInProject extends CollaboratedProjectItem {
  skill: Skill;
}

/**
 * Feature of the project implementation (could be nested)
 */
interface ProjectFeature extends CollaboratedProjectItem {
  /**
   * String that describes the feature
   */
  content: string;
}

/**
 * Something of the project that is either directly related to my effort or completely unrelated
 */
interface CollaboratedProjectItem {
  /**
   * Whether the thing is done (or used) by me
   */
  byMe: boolean;
}

/**
 * Project screenshots can be just an array of screenshots,
 * or divided into smaller groups by topic.
 */
type ProjectScreenshots = ProjectScreenshot[] | ProjectScreenshotGroup[];

/**
 * Group of project screenshots (eg. Native APP screenshots, Web APP screenshots)
 */
interface ProjectScreenshotGroup {
  /**
   * Title of the group
   */
  title: string;

  /**
   * Screenshots which are classified as this group
   */
  screenshots: ProjectScreenshot[];
}

/**
 * Screenshot to help understand the project
 */
interface ProjectScreenshot {
  /**
   * Media type of the screenshot file
   */
  type: ProjectScreenshotType;

  /**
   * URL of the screenshot resource file
   */
  src: string;
}

/**
 * Media type of the project screenshot
 */
export enum ProjectScreenshotType {
  Video,
  Audio,
}
