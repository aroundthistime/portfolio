import { RuleSet, css } from 'styled-components';

/**
 * Type of devices (used for media query)
 */
export enum DeviceType {
  Mobile,
  Tablet,
  Laptop,
  Desktop,
}

/**
 * Breakpoint of size for each devices (in pixels)
 */
const DEVICE_BREAK_POINT = {
  [DeviceType.Mobile]: 0,
  [DeviceType.Tablet]: 768,
  [DeviceType.Laptop]: 1024,
  [DeviceType.Desktop]: 2560,
};

/**
 * Get css statement for certain device type
 * @param {RuleSet<Object>} cssStatement Css statement to apply for certain condition
 * @param {...DeviceType[]} deviceTypes Type of devices that you want to apply the style
 * @returns {RuleSet<Object>} Responsive css statement only applied for the certain device type(s)
 */
export const getResponsiveStyle = (
  cssStatement: RuleSet<Object>,
  ...deviceTypes: DeviceType[]
) => {
  const getMediaQuery = (deviceType: DeviceType) => {
    let mediaQuery = `@media screen and (min-width: ${DEVICE_BREAK_POINT[deviceType]}px)`;

    if (deviceType !== DeviceType.Desktop) {
      mediaQuery = `${mediaQuery} and (max-width: ${
        DEVICE_BREAK_POINT[deviceType + 1] + 1
      }px)`;
    }
    return mediaQuery;
  };

  const result = deviceTypes
    .map(deviceType => {
      return css`
        ${getMediaQuery(deviceType)} {
          ${cssStatement}
        }
      `;
    })
    .reduce(
      (acc, styles) => css`
        ${acc};
        ${styles}
      `,
    );

  return result;
};
