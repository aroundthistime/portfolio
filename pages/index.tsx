import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isMobileDevice } from '../src/utils/device';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (isMobileDevice()) {
      router.replace('/static');
    } else {
      router.replace('/3d');
    }
  }, []);

  return null;
};

export default IndexPage;
