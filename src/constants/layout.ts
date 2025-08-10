import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const finalTailwindConfig = resolveConfig(tailwindConfig);

export const BREAKPOINTS = finalTailwindConfig.theme.screens;

const getMediaQuery = (breakpoint: keyof typeof BREAKPOINTS, direction: 'min' | 'max' = 'min') => {
  const value = BREAKPOINTS[breakpoint];
  return `(${direction}-width: ${value})`;
};

/**
 * 모바일 뷰포트 감지를 위한 미디어 쿼리 (md 브레이크포인트 미만)
 */
export const MOBILE_MEDIA_QUERY = getMediaQuery('md', 'max');

/**
 * 데스크톱 뷰포트 감지를 위한 미디어 쿼리 (md 브레이크포인트 이상)
 */
export const DESKTOP_MEDIA_QUERY = getMediaQuery('md', 'min');