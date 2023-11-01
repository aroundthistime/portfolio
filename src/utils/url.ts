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
