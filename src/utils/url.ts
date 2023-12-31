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
  return `${url}${separator}_=${new Date().getTime()}`;
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
