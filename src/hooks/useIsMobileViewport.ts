import useMediaQuery from './useMediaQuery';
import { MOBILE_MEDIA_QUERY } from '@/constants/layout';

/**
 * Tailwind CSS의 md 브레이크포인트와 동일한 기준으로 모바일 뷰포트를 감지합니다.
 * @returns {boolean} 모바일 뷰포트인지 여부 (max-width: 768px)
 */
const useIsMobileViewport = () => {
  return useMediaQuery(MOBILE_MEDIA_QUERY);
};

export default useIsMobileViewport;