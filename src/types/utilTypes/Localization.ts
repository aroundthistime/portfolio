import { ReplaceSubType } from '.';
import { Locale } from '../Locale';

/**
 * Utility type which has strings for different locales
 * @template {T} - The type with actual string data for each locales
 */
export type MultiLanguageString = Record<Locale, string>;

/**
 * Utility type which converts a data type for multi language
 * and covert into structure with string (which is localized)
 * @template {T} - Data type before localization (which contains multi language support)
 */
export type LocalizedType<T> = ReplaceSubType<T, MultiLanguageString, string>;
