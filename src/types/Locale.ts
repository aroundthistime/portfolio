/**
 * Supported locales in the application
 */
export const LOCALES = ['en-US', 'ko-KR'] as const satisfies Readonly<string[]>;

/**
 * Locale applied by default
 */
export const DEFAULT_LOCALE: Locale = 'en-US';

/**
 * Types of supported locales in the application
 */
export type Locale = (typeof LOCALES)[number];
