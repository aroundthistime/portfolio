import styled from 'styled-components';

export const NestedListWrapper = styled.ol`
  display: flex;
  flex-direction: column;

  .nested-list__items {
    display: flex;
    flex-direction: column;
  }
`;

/**
 * Get corresponding css generating function for certain style property of nested list
 * @param {NestedListConfigProperty} property Property that nested list provides easy to use css generator
 * @returns {(config: NestesdListConfig) => string} Nested list css generator
 */
export const getNestedListCssGenerator = (
  property: NestedListConfigProperty,
) => {
  switch (property) {
    case 'font-size':
      return getFontSizeCss;
    case 'list-gap':
      return getGapBetweenListsCss;
    case 'item-gap':
      return getGapBetweenItemsCss;
    case 'title-item-gap':
      return getGapBetweenTitleAndItemsCss;
    default:
      throw Error('Unsupported css property for nested list');
  }
};

/**
 * Property that nested list provides easy to use css generator
 */
export type NestedListConfigProperty =
  | 'font-size'
  | 'list-gap'
  | 'item-gap'
  | 'title-item-gap';

/**
 * Get CSS string for styling font size inside nested list
 * @param {NestedListConfigByDepth} fontSizeConfig Config for styling font size
 * @returns {string} CSS string based on the given config
 */
const getFontSizeCss = (fontSizeConfig: NestedListConfigByDepth) => {
  return Array.from(
    { length: fontSizeConfig.depthWithMinValue },
    (_, depth) => {
      return `.nested-list__title--depth-${depth}, .nested-list__item--depth-${depth} {
              font-size: ${getValueFromDepth(fontSizeConfig, depth)}px;
          }`;
    },
  ).join('');
};

/**
 * Get CSS string for styling gaps between lists inside nested list
 * @param {NestedListConfigByDepth} listGapConfig Config for styling gaps between lists
 * @returns {string} CSS string based on the given config
 */
const getGapBetweenListsCss = (listGapConfig: NestedListConfigByDepth) => {
  return Array.from({ length: listGapConfig.depthWithMinValue }, (_, depth) => {
    return `
            .nested-list__list--depth-${depth} {
                row-gap: ${getValueFromDepth(listGapConfig, depth)}px;
            }
          `;
  }).join('');
};

/**
 * Get CSS string for styling gaps between items inside nested list
 *@param {NestedListConfigByDepth} itemGapConfig Config for styling gaps between items
 * @returns {string} CSS string based on the given config
 */
const getGapBetweenItemsCss = (itemGapConfig: NestedListConfigByDepth) => {
  return Array.from({ length: itemGapConfig.depthWithMinValue }, (_, depth) => {
    return `
              .nested-list__items--depth-${depth} {
                  row-gap: ${getValueFromDepth(itemGapConfig, depth)}px;
              }
            `;
  }).join('');
};

/**
 * Get CSS string for styling gaps between title and items inside nested list
 *@param {NestedListConfigByDepth} titleItemsGapConfig Config for styling gaps between title and items
 * @returns {string} CSS string based on the given config
 */
const getGapBetweenTitleAndItemsCss = (
  titleItemsGapConfig: NestedListConfigByDepth,
) => {
  return Array.from(
    { length: titleItemsGapConfig.depthWithMinValue },
    (_, depth) => {
      return `
              .nested-list__title--depth-${depth} {
                  margin-bottom: ${getValueFromDepth(
                    titleItemsGapConfig,
                    depth,
                  )}px;
              }
          `;
    },
  ).join('');
};

/**
 * Calculate the correct value for current depth
 * @param {NestedListConfigByDepth} nestedListConfigByDepth Config containing the values needed for calculation
 * @param {number} depth Depth from the root of the nested list
 * @returns {number} Style value to apply for the given depth of nested list
 */
const getValueFromDepth = (
  nestedListConfigByDepth: NestedListConfigByDepth,
  depth: number,
) => {
  const { root, dropPerDepth } = nestedListConfigByDepth;
  return root - depth * dropPerDepth;
};

/**
 * Config used for setting styles inside nested list.
 * The basic concept is giving hierarchical difference according to the depth
 */
export interface NestedListConfigByDepth {
  /**
   * Value applied at the root of the nested list
   */
  root: number;

  /**
   * Amount of value decrease per each depth from the root.
   * If you want to increase the value as the depth gets bigger, give negative value for this
   */
  dropPerDepth: number;

  /**
   * Depth with the minimum value.
   * The value would not decrease anymore even if the nested list gets deeper
   */
  depthWithMinValue: number;
}
