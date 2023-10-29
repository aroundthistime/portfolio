import styled from 'styled-components';
import {
  NestedListConfigByDepth,
  NestedListConfigProperty,
  getNestedListCssGenerator,
} from '@/components/NestedList/style';

export const PortfolioContentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7eedd;
  padding: 30px;
  padding-right: 10px;
  border-radius: 18px;
  width: 100%;
  max-height: 75vh;
  max-height: 75dvh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const PortfolioContentBoxHeader = styled.h2`
  padding: 10px 35px 10px 5px;
  padding-top: 0px;
  border-bottom: 2px solid #a86442;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 25px;
`;

/**
 * Get css code for styling nested list
 * @returns {string} Css style in string format
 */
const getNestedListStyle = () => {
  const NESTED_LIST_STYLE_CONFIG: Record<
    NestedListConfigProperty,
    NestedListConfigByDepth
  > = {
    'font-size': {
      root: 20,
      dropPerDepth: 2.2,
      depthWithMinValue: 4,
    },
    'list-gap': {
      root: 18,
      dropPerDepth: 2,
      depthWithMinValue: 4,
    },
    'item-gap': {
      root: 6,
      dropPerDepth: 0.5,
      depthWithMinValue: 4,
    },
    'title-item-gap': {
      root: 5,
      dropPerDepth: 0.4,
      depthWithMinValue: 4,
    },
  };

  return Object.keys(NESTED_LIST_STYLE_CONFIG)
    .map(styleProperty => {
      const cssGenerator = getNestedListCssGenerator(
        styleProperty as NestedListConfigProperty,
      );
      return cssGenerator(NESTED_LIST_STYLE_CONFIG[styleProperty]);
    })
    .join('');
};

export const PortfolioContentBoxBody = styled.div`
  padding-top: 10px;
  padding-right: 30px;
  overflow-y: auto;

  // Disable line-height fow using overflow: auto
  line-height: normal;

  ${getNestedListStyle()}
`;