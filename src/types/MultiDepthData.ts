/**
 * Data with one or more depths
 * @template {T} DataType Type of data being stored inside this structure
 * @see {DefaultDataType} Default data type will be used if generic type is not given
 */
export interface MultiDepthData<DataType = DefaultDataType> {
  /**
   * Title of the data
   */
  title: DataType;

  /**
   * Array of items corresponding to this data
   */
  items: (DataType | MultiDepthData<DataType>)[];
}

/**
 * Default type of the data inside multi depth data
 */
type DefaultDataType = string | React.JSX.Element;
