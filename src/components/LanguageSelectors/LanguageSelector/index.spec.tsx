/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import mockedRouter from 'next-router-mock';
import { fireEvent, render, screen } from '__test__/test-utils';
import LanguageSelector from '.';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('LanguageSelector', () => {
  const INITIAL_PATH = '/home?sort=newest';

  const TEST_PROPS_ENGLISH: ComponentProps<typeof LanguageSelector> = {
    language: 'English',
    locale: 'en-US',
    iconSrc: '/en.jpg',
  };

  const TEST_PROPS_KOREAN: ComponentProps<typeof LanguageSelector> = {
    language: '한국어',
    locale: 'ko-KR',
    iconSrc: '/kr.jpg',
  };

  beforeEach(() => {
    mockedRouter.push(INITIAL_PATH);
    mockedRouter.locale = TEST_PROPS_KOREAN.locale;
  });

  it('changes locale with same path when clicked', async () => {
    render(<LanguageSelector {...TEST_PROPS_ENGLISH} />);

    fireEvent.click(
      screen.getByTestId(`language-selector-${TEST_PROPS_ENGLISH.locale}`),
    );

    expect(mockedRouter.locale).toEqual(TEST_PROPS_ENGLISH.locale);
  });

  /**
   * @TODO Update this code when next-router-mock supports router.back method
   * @see https://github.com/scottrippey/next-router-mock/issues/73
   */
  // it('changes locale without adding history', () => {
  //   const SECOND_PATH = '/project/detail/1';
  //   mockedRouter.push(SECOND_PATH);

  //   render(<LanguageSelector {...TEST_PROPS_ENGLISH} />);

  //   fireEvent.click(
  //     screen.getByTestId(`language-selector-${TEST_PROPS_ENGLISH.locale}`),
  //   );

  //   expect(mockedRouter.locale).toEqual(TEST_PROPS_ENGLISH.locale);
  //   expect(mockedRouter.asPath).toEqual(SECOND_PATH);

  //   mockedRouter.back()

  //   expect(mockedRouter.asPath).toEqual(INITIAL_PATH)
  // });

  it('renders correctly both when selected and not', () => {
    const result = render(
      <>
        <LanguageSelector {...TEST_PROPS_ENGLISH} />
        <LanguageSelector {...TEST_PROPS_KOREAN} />
      </>,
    );

    const SELECTED_SELECTOR_CLASSNAME = 'language-selector--selected';

    const englishSelector = screen.getByTestId(
      `language-selector-${TEST_PROPS_ENGLISH.locale}`,
    );
    const koreanSelector = screen.getByTestId(
      `language-selector-${TEST_PROPS_KOREAN.locale}`,
    );

    expect(englishSelector).toBeVisible();
    expect(koreanSelector).toBeVisible();

    expect(englishSelector).not.toHaveClass(SELECTED_SELECTOR_CLASSNAME);
    expect(koreanSelector).toHaveClass(SELECTED_SELECTOR_CLASSNAME);

    fireEvent.click(englishSelector);

    expect(englishSelector).toBeVisible();
    expect(koreanSelector).toBeVisible();
    expect(englishSelector).toHaveClass(SELECTED_SELECTOR_CLASSNAME);
    expect(koreanSelector).not.toHaveClass(SELECTED_SELECTOR_CLASSNAME);
  });
});
