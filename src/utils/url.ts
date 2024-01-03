/**
 * Normalize route or query parameter inside URL.
 * If parameter is string, the value is just returned.
 * If parameter is a string of array, first value is returned
 * @param {string | string[]} parameter Query parameter or router parameter obtained from URL
 * @returns Normalized URL parameter
 */
export const normalizeURLParam = (parameter: string | string[]) => {
  return typeof parameter === 'string' ? parameter : parameter[0];
};

/**
 * Add a cache-disabling query parameter to a URL, ensuring it won't be cached by the browser.
 * If the URL is a blob URL or a data URL, it remains unchanged.
 *
 * [important] This function uses timestamp, therefore check for hydration is required for production mode
 *
 * @param {string} url URL to modify
 * @returns {string} The modified URL with cache-disabled
 */
export const getCacheDisabledURL = (url: string) => {
  // Blob URLs or data URLs are no longer valid after modification
  if (isBlobURL(url) || isDataURL(url)) {
    return url;
  }
  const separator = url.includes('?') ? '&' : '?'; // Check if the URL already has query parameters

  const usedSearchParams = extractURLQueryParams(url);

  // Prevent query key being added from messing up the original URL
  let randomQueryKey = '_';
  while (usedSearchParams[randomQueryKey] !== undefined) {
    randomQueryKey += '_';
  }

  return `${url}${separator}${randomQueryKey}=${new Date().getTime()}`;
};

/**
 * Extract query parameters inside given URL.
 * The URL does not have to be standard URL format (eg. relative path like '/image.jpg' is also supported)
 * @param {string} url URL to extract parameters from
 * @returns {Record<string, string>} Key-value object of query parameters inside the URL
 */
const extractURLQueryParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};

  const queryString = url.split('?')[1];

  if (!queryString) {
    return params;
  }

  const queries = queryString.split('&');

  queries.forEach(query => {
    const [key, value] = query.split('=');
    params[key] = decodeURIComponent(value);
  });

  return params;
};

/**
 * Get whether the given URL is Blob URL or not
 * @param {string} url URL to validate
 * @returns {boolean} True if the URL is a Blob URL
 */
export const isBlobURL = (url: string) => {
  return url.startsWith('blob:');
};

/**
 * Get whether the given URL is data URL or not
 * @param {string} url URL to validate
 * @returns {boolean} True if the URL is a data URL
 */
export const isDataURL = (url: string) => {
  return url.startsWith('data:');
};
