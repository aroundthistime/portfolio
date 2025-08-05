import { Header } from '@/components/layout/Header';
import HeroSection from './sections/Hero';
import AboutMeSection from './sections/AboutMe';
import TechSkillsSection from './sections/Skills';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import ProjectsSection from './sections/Projects';

/**
 * 홈 스크린 메인 섹션 상수들
 * href와 section id의 일관성을 보장합니다.
 */
export const HOME_SCREEN_MAIN_SECTIONS = {
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type HomeScreenMainSectionType =
  (typeof HOME_SCREEN_MAIN_SECTIONS)[keyof typeof HOME_SCREEN_MAIN_SECTIONS];

export const HOME_SCREEN_NAVIGATION_TABS = [
  { label: 'About', href: `#${HOME_SCREEN_MAIN_SECTIONS.ABOUT}` },
  { label: 'Skills', href: `#${HOME_SCREEN_MAIN_SECTIONS.SKILLS}` },
  { label: 'Projects', href: `#${HOME_SCREEN_MAIN_SECTIONS.PROJECTS}` },
  { label: 'Contact', href: `#${HOME_SCREEN_MAIN_SECTIONS.CONTACT}` },
] as const satisfies ReadonlyArray<{
  readonly label: string;
  readonly href: `#${HomeScreenMainSectionType}`;
}>;

export function Home() {
  return (
    <>
      <Header tabs={HOME_SCREEN_NAVIGATION_TABS} />
      <HeroSection />
      <AboutMeSection />
      <TechSkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
