import UAParser from 'ua-parser-js';

/**
 * Get whether browser is running on a mobile device or not (including tablet)
 * @returns {boolean} Whether browser is running on a mobile device or not (including tablet)
 */
export const isMobileDevice = (): boolean => {
  const currentDeviceType = new UAParser().getDevice().type;

  return [UAParser.DEVICE.MOBILE, UAParser.DEVICE.TABLET].includes(
    currentDeviceType as any,
  );
};
