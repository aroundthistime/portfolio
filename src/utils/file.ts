/**
 * Get extension from file name
 * @param {string} fileName Name of the file (could include path)
 * @returns {string} Extension of the file
 */
export const getExtension = (fileName: string) => {
  const lastDot = fileName.lastIndexOf('.');
  const extension = fileName
    .substring(lastDot, fileName.length)
    .split('.')
    .pop()
    ?.toLowerCase();
  return extension;
};
