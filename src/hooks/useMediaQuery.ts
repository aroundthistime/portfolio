import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    mediaQueryList.addEventListener('change', listener);

    // Cleanup
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery