import React from 'react';
import { NestedListWrapper } from './style';
import { MultiDepthData } from '@/types/MultiDepthData';

interface Props {
  /**
   * Array of data with one or more depths
   */
  multiDepthDataList: MultiDepthData[];

  /**
   * Whether to insert bullet point at the beginning of each item (default is true).
   * This is config for the entire nested list tree.
   * If you want to differentiate the existence of bullet point, please use css with classnames
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
  const bulletPoint = useBulletPoint ? getBulletPointSpan(index, depth) : '';
  return (
    <p className={getClassNameWithDepth('nested-list__title', depth)}>
      {bulletPoint}&nbsp;{title}
    </p>
  );
};

interface TitleProps {
  title: MultiDepthData['title'];
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
  const bulletPoint = useBulletPoint ? getBulletPointSpan(index, depth) : '';

  const LEFT_MARGIN_PER_DEPTH = '15px';

  const getRenderResultByItemType = () => {
    if (typeof item === 'string' || React.isValidElement(item)) {
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
  item: MultiDepthData['items'][0];
  index: number;
  depth: number;
  useBulletPoint: boolean;
}

/**
 * Get bullet point for the current item of nested list.
 * And starting from certain depth, same bulletin point will be returned
 * @param {number} index Item index compared to its siblings
 * @param {number} depth Current depth from the root of the nested list
 * @returns {JSX.Element} Span with bullet point (space not included)
 */
const getBulletPointSpan = (index: number, depth: number) => {
  // Correct index value to start from 1 instead of 0
  const actualOrder = index + 1;
  let bulletPointString: string;

  switch (depth) {
    case 0:
      bulletPointString = `${actualOrder}.`;
      break;
    case 1:
      bulletPointString = `(${actualOrder})`;
      break;
    case 2:
      bulletPointString = '•';
      break;
    default:
      bulletPointString = '-';
      break;
  }
  return <span className="nested-list__bullet-point">{bulletPointString}</span>;
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

export default NestedList;
