import { MyContactType } from '@/types/MyContact';
import { SectionTitle } from '@/types/enums/SectionTitle';

interface AbstractSection {
  title: SectionTitle;
}

export interface IntroSection extends AbstractSection {
  title: SectionTitle.Intro;
}

export interface SkillsSection extends AbstractSection {
  title: SectionTitle.Skills;
}

export interface ProjectsSection extends AbstractSection {
  title: SectionTitle.Projects;

  /**
   * URL of webview page to show up at monitor screen.
   * Could be null if no project is selected and being shown through the monitor
   */
  monitorScreenUrl: string | null;

  /**
   * Open monitor screen with certain page
   * @param {string} monitorScreenUrl URL of the page to show through monitor screen
   */
  openMonitor: (monitorScreenUrl: string) => void;

  /**
   * Close monitor screen
   */
  closeMonitor: () => void;
}

export interface ContactMeSection extends AbstractSection {
  title: SectionTitle.ContactMe;

  /**
   * Type of my contact being hovered right now.
   * Could be null if none is being hovered
   */
  highlightedContactType: MyContactType | null;

  highlightContact: (contactType: MyContactType) => void;

  obscureContact: () => void;
}

/**
 * Type of data which represents current section being rendered at the portfolio
 */
export type CurrentSection =
  | IntroSection
  | SkillsSection
  | ProjectsSection
  | ContactMeSection;
