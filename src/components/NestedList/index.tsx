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
          <li key={multiDepthData.title} className="nested-list__title">
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
const MultiDepthDataTitle = ({ title, index, depth }) => {
  return <p>{`${getBulletPoint(index, depth)} ${title}`}</p>;
};

/**
 * Component for rendering a certain item of multi depth data
 */
const MultiDepthDataItem = ({ item, index, depth }) => {
  const bulletPoint = getBulletPoint(index, depth);

  const LEFT_MARGIN_PER_DEPTH = '15px';

  return (
    <li
      key={item.toString}
      style={{ marginLeft: LEFT_MARGIN_PER_DEPTH }}
      className="nested-list__item">
      {typeof item === 'string' ? (
        <p key={item}>{`${bulletPoint} ${item}`}</p>
      ) : (
        <NestedList
          multiDepthDataList={[item]}
          currentDepth={depth}
          listIndex={index}
        />
      )}
    </li>
  );
};

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
  title: string | React.JSX.Element;

  /**
   * Array of items corresponding to this data
   */
  items: (string | React.JSX.Element | MultiDepthData)[];
}

export default NestedList;
