import React from 'react';
import { NestedListWrapper } from './style';

interface Props {
  /**
   * Array of data with one or more depths
   */
  multiDepthDataList: MultiDepthData[];

  /**
   * Whether to insert bullet point at the beginning of each item (default is true)
   */
  useBulletPoint?: boolean;

  /**
   * Depth of the current list from the root (default is 0)
   */
  depth?: number;

  /**
   * Index of the current list compared to its siblings (default is 0)
   */
  listIndex?: number;

  /**
   * Class name to give to the root list
   */
  className?: string;
}

/**
 * Component for rendering a nested list.
 * Uses numbered bullet points to list up items
 */
const NestedList = ({
  multiDepthDataList,
  useBulletPoint = true,
  depth = 0,
  listIndex = 0,
  className = '',
}: Props) => {
  const getClassName = () => {
    return `${getClassNameWithDepth('nested-list__list', depth)} ${className}`;
  };

  return (
    <NestedListWrapper className={getClassName()}>
      {multiDepthDataList.map((multiDepthData, dataIndex) => {
        return (
          <li key={Math.random()}>
            <MultiDepthDataTitle
              title={multiDepthData.title}
              index={dataIndex + listIndex}
              depth={depth}
              useBulletPoint={useBulletPoint}
            />
            <ol className={getClassNameWithDepth('nested-list__items', depth)}>
              {multiDepthData.items.map((item, itemIndex) => (
                <MultiDepthDataItem
                  key={Math.random()}
                  item={item}
                  index={itemIndex}
                  depth={depth + 1}
                  useBulletPoint={useBulletPoint}
                />
              ))}
            </ol>
          </li>
        );
      })}
    </NestedListWrapper>
  );
};

/**
 * Component for rendering title of a multi depth data
 */
const MultiDepthDataTitle = ({
  title,
  index,
  depth,
  useBulletPoint,
}: TitleProps) => {
  const bulletPoint = useBulletPoint ? getBulletPoint(index, depth) : '';
  return (
    <p className={getClassNameWithDepth('nested-list__title', depth)}>
      {bulletPoint}&nbsp;{title}
    </p>
  );
};

interface TitleProps {
  title: DataTitle;
  index: number;
  depth: number;
  useBulletPoint: boolean;
}

/**
 * Component for rendering a certain item of multi depth data
 */
const MultiDepthDataItem = ({
  item,
  index,
  depth,
  useBulletPoint,
}: ItemProps) => {
  const bulletPoint = useBulletPoint ? getBulletPoint(index, depth) : '';

  const LEFT_MARGIN_PER_DEPTH = '15px';

  const getRenderResultByItemType = () => {
    if (typeof item === 'string') {
      // string
      return <p>{`${bulletPoint} ${item}`}</p>;
    }
    if (React.isValidElement(item)) {
      // JSX element
      return (
        <p>
          {bulletPoint}&nbsp;{item}
        </p>
      );
    }
    return (
      // Another multi depth data nested
      <NestedList
        multiDepthDataList={[item as MultiDepthData]}
        depth={depth}
        listIndex={index}
        useBulletPoint={useBulletPoint}
      />
    );
  };

  return (
    <li
      key={Math.random()}
      style={{ marginLeft: LEFT_MARGIN_PER_DEPTH }}
      className={getClassNameWithDepth('nested-list__item', depth)}>
      {getRenderResultByItemType()}
    </li>
  );
};

interface ItemProps {
  item: DataItem;
  index: number;
  depth: number;
  useBulletPoint: boolean;
}

/**
 * Get bullet point for the current item of nested list.
 * And starting from certain depth, same bulletin point will be returned
 * @param {number} index Item index compared to its siblings
 * @param {number} depth Current depth from the root of the nested list
 * @returns {string} Bullet point (space not included)
 */
const getBulletPoint = (index: number, depth: number) => {
  // Correct index value to start from 1 instead of 0
  const actualOrder = index + 1;
  switch (depth) {
    case 0:
      return `${actualOrder}.`;
    case 1:
      return `(${actualOrder})`;
    case 2:
      return '•';
    default:
      return '-';
  }
};

/**
 * Get classnames for elements inside nested list (one with default, one with modifier added based on depth).
 * This can be used to give different styling for each depths.
 * Please be aware that the depth would start from 0
 * @param {string} defaultClassName The default classname without any modifier
 * @param {number} depth Current depth from the root of the nested list
 * @returns {string} Classname to give to the element
 */
const getClassNameWithDepth = (defaultClassName: string, depth: number) => {
  return `${defaultClassName} ${defaultClassName}--depth-${depth}`;
};

/**
 * Data with one or more depths
 */
export interface MultiDepthData {
  /**
   * Title of the data
   */
  title: DataTitle;

  /**
   * Array of items corresponding to this data
   */
  items: DataItem[];
}

type DataTitle = string | React.JSX.Element;

type DataItem = DataTitle | MultiDepthData;

export default NestedList;
