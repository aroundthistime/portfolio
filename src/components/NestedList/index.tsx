import React from 'react';

interface Props {
  /**
   * Array of data with one or more depths
   */
  multiDepthDataList: MultiDepthData[];

  /**
   * Depth of the current list from the root
   */
  currentDepth?: number;

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
  currentDepth = 0,
  listIndex = 0,
  className = '',
}: Props) => {
  return (
    <ol className={className}>
      {multiDepthDataList.map((multiDepthData, dataIndex) => {
        return (
          <li
            key={multiDepthData.title.toString()}
            className="nested-list__title">
            <MultiDepthDataTitle
              title={multiDepthData.title}
              index={dataIndex + listIndex}
              depth={currentDepth}
            />
            <ol>
              {multiDepthData.items.map((item, itemIndex) => (
                <MultiDepthDataItem
                  key={item.toString()}
                  item={item}
                  index={itemIndex}
                  depth={currentDepth + 1}
                />
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

/**
 * Component for rendering title of a multi depth data
 */
const MultiDepthDataTitle = ({ title, index, depth }: TitleProps) => {
  return (
    <p>
      {getBulletPoint(index, depth)}&nbsp;{title}
    </p>
  );
};

interface TitleProps {
  title: DataTitle;
  index: number;
  depth: number;
}

/**
 * Component for rendering a certain item of multi depth data
 */
const MultiDepthDataItem = ({ item, index, depth }: ItemProps) => {
  const bulletPoint = getBulletPoint(index, depth);

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
        currentDepth={depth}
        listIndex={index}
      />
    );
  };

  return (
    <li
      key={item.toString()}
      style={{ marginLeft: LEFT_MARGIN_PER_DEPTH }}
      className="nested-list__item">
      {getRenderResultByItemType()}
    </li>
  );
};

interface ItemProps {
  item: DataItem;
  index: number;
  depth: number;
}

/**
 * Get bullet point for the current item of nested list.
 * And starting from certain depth, same bulletin point will be returned
 * @param {number} index Item index compared to its siblings
 * @param {number} depth Depth of the current item from the root
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
