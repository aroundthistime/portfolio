/**
 * Utility type which has values of given type for different locales
 * @template {T} - The type of actual data for each locales
 */
export type LocalizedData<T> = {
  'ko-KR': T;
  'en-US': T;
};

/**
 * Utility type which has strings for different locales
 * @template {T} - The type with actual string data for each locales
 */
export type LocalizedString = {
  'ko-KR': string;
  'en-US': string;
};
