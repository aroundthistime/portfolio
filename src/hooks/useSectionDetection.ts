import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SectionTitle } from '@/types/enums/SectionTitle';

/**
 * Hook for detecting the section user is currently looking at and responding correspondingly
 * @param {SectionTitle} sectionTitle Title of the section to detect
 * @param {() => void} [onSectionEnter] Callback when the user enters this section (optional)
 */
const useSectionDetection = (
  sectionTitle: SectionTitle,
  onSectionEnter?: () => void,
) => {
  const router = useRouter();
  const { section } = router.query;

  /**
   * Update URL query parameter that the user is looking at this section
   */
  const updateQueryParameterToCurrentSection = () => {
    router.replace({
      query: {
        ...router.query,
        section: sectionTitle,
      },
    });
  };

  useEffect(() => {
    if (!router.isReady) return;

    if (section === sectionTitle && onSectionEnter) {
      onSectionEnter();
    }
  }, [section]);

  return {
    updateQueryParameterToCurrentSection,
  };
};

export default useSectionDetection;
