import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import useSectionDetection from './useSectionDetection';
import { SectionTitle } from '@/types/enums/SectionTitle';

let mockedOnSectionEnter: jest.Mock;

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedReplace = jest.fn();

describe('useSectionDetection', () => {
  const TEST_SECTION_TITLE = SectionTitle.Intro;

  beforeEach(() => {
    mockedOnSectionEnter = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      isReady: true,
      query: {},
      replace: mockedReplace,
    }));

    mockedReplace.mockImplementation((params: { query: any }) => {
      (useRouter as jest.Mock).mockImplementation(() => ({
        isReady: true,
        query: params.query,
        replace: mockedReplace,
      }));
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls onSectionEnter callback if page entered given section', () => {
    const { rerender } = renderHook(() => {
      useSectionDetection(TEST_SECTION_TITLE, mockedOnSectionEnter);
    });

    expect(mockedOnSectionEnter).toHaveBeenCalledTimes(0);

    useRouter().replace({
      query: {
        section: TEST_SECTION_TITLE,
      },
    });
    rerender();

    expect(mockedOnSectionEnter).toHaveBeenCalledTimes(1);
  });

  it('can update section manually', () => {
    const { rerender, result } = renderHook(() =>
      useSectionDetection(TEST_SECTION_TITLE, mockedOnSectionEnter),
    );

    expect(mockedOnSectionEnter).toHaveBeenCalledTimes(0);

    result.current.updateQueryParameterToCurrentSection();
    rerender();

    expect(mockedOnSectionEnter).toHaveBeenCalledTimes(1);
  });
});
