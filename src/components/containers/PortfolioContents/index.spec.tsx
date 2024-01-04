import { render } from '__test__/test-utils';
import React from 'react';
import PortfolioContents from '.';
import use3DSceneStore from '@/store/use3DSceneStore';
import { SectionTitle } from '@/types/enums/SectionTitle';
import { CurrentSection } from '@/store/use3DSceneStore/types';

jest.mock('./Intro', () => {
  return () => <div data-testid="intro" />;
});

jest.mock('./SkillSet', () => {
  return () => <div data-testid="skillset" />;
});
jest.mock('./Projects', () => {
  return () => <div data-testid="projects" />;
});
jest.mock('./ContactMe', () => {
  return () => <div data-testid="contact-me" />;
});

describe('PortfolioContents', () => {
  beforeEach(() => {
    use3DSceneStore.getState().updateCurrentSection(SectionTitle.Intro);
  });

  it('renders content if current section is not projects', async () => {
    const { getByTestId } = render(<PortfolioContents />);

    expect(getByTestId('portfolio-contents-container')).toBeVisible();
  });

  it('does not render any content if monitor is turned on', async () => {
    const { getByTestId } = render(<PortfolioContents />);

    const containerElement = getByTestId('portfolio-contents-container');

    expect(containerElement).toBeVisible();

    use3DSceneStore.getState().updateCurrentSection(SectionTitle.Projects);

    expect(containerElement).toBeVisible();

    const currentSection = use3DSceneStore.getState().currentSection as Extract<
      CurrentSection,
      { title: SectionTitle.Projects }
    >;
    currentSection.openMonitor('https:/www.naver.com');

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).not.toBeVisible();
  });

  it('rerenders every element in the same state if monitor is turned off from turned on', () => {
    const { getByText, queryByText, getByTestId } = render(
      <PortfolioContents />,
    );

    const SAMPLE_TEXT = 'text';

    const containerElement = getByTestId('portfolio-contents-container');
    const introElement = getByTestId('intro');

    expect(queryByText(SAMPLE_TEXT)).toBeNull();

    introElement.textContent = SAMPLE_TEXT;

    expect(getByText(SAMPLE_TEXT)).toBeDefined();
    expect(getByText(SAMPLE_TEXT)).toBe(introElement);

    expect(containerElement).toBeVisible();

    use3DSceneStore.getState().updateCurrentSection(SectionTitle.Projects);

    const currentSection = use3DSceneStore.getState().currentSection as Extract<
      CurrentSection,
      { title: SectionTitle.Projects }
    >;
    currentSection.openMonitor('https:/www.naver.com');

    expect(introElement).not.toBeVisible();

    use3DSceneStore.getState().updateCurrentSection(SectionTitle.Intro);

    expect(introElement).toBeVisible();
    expect(introElement).toHaveTextContent(SAMPLE_TEXT);
  });
});
