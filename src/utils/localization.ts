/* eslint-disable no-prototype-builtins */
import {
  LocalizedType,
  MultiLanguageString,
} from '@/types/utilTypes/Localization';
import { replaceRecursively } from './iterator';
import { LOCALES } from '@/types/Locale';

/**
 * Get localized version of raw data containing multi languages
 *
 * @template {T} - Type of data with multi language support
 *
 * @param {T} multiLanguageData Data which needs to be localized
 * @param {keyof MultiLanguageString} locale Locale used for localization
 * @returns {LocalizedType<T>} Localized version of the original data
 */
export const localizeData = <T>(
  multiLanguageData: T,
  locale: keyof MultiLanguageString,
) => {
  /**
   * Get whether the given data is multi language data and needs to be localized`
   */
  const isMultiLanguageData = (data: any): data is MultiLanguageString => {
    return (
      typeof data === 'object' &&
      data !== null &&
      LOCALES.every(possibleLocale => {
        return data.hasOwnProperty(possibleLocale);
      })
    );
  };

  /**
   * Get localized string using locale value
   */
  const getLocalizedString = (
    multiLanguageString: MultiLanguageString,
  ): string => {
    return multiLanguageString[locale];
  };

  return replaceRecursively(
    multiLanguageData,
    isMultiLanguageData,
    getLocalizedString,
  );
};
