import cloneDeep from 'lodash/cloneDeep';
import { MultiDepthData } from '@/types/MultiDepthData';

/**
 * Utility class for deeper processing with multi depth data structure
 */
class MultiDepthDataUtils<T> {
  constructor(multiDepthData: MultiDepthData<T>) {
    this.multiDepthData = multiDepthData;
  }

  /**
   * Convert all the data inside multi depth data using the given callback.
   * This method doesn't change the original,
   * @template {U} Type of data which will go inside multi depth data after processing (set as original type by default)
   * @param {(data: T) => any} convertingCallback Callback which takes every data as parameter and returns the conversion result to replace with the original data
   * @returns {MultiDepthData} Multi depth data with every data replaced by the conversion logic
   */
  convertAllDataInside = <U = T>(convertingCallback: (data: T) => U) => {
    const clonedMultiDepthData = cloneDeep(this.multiDepthData);

    // @ts-ignore
    clonedMultiDepthData.title = convertingCallback(clonedMultiDepthData.title);

    // @ts-ignore
    clonedMultiDepthData.items = clonedMultiDepthData.items.map(item => {
      if (MultiDepthDataUtils.isMultiDepthData(item)) {
        const multiDepthDataUtils = new MultiDepthDataUtils<T>(item);
        return multiDepthDataUtils.convertAllDataInside(convertingCallback);
      }
      return convertingCallback(item);
    });

    return clonedMultiDepthData as unknown as MultiDepthData<U>;
  };

  /**
   * Traverse through every element inside multi depth data and execute callback.
   * The callback is only executed for pure data, so nested multi depth data are not targets.
   * This method does not assure asynchronous of the callback (use traverseAsync instead)
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {(data: T) => void} callback Callback to execute for every elements
   */
  traverse = (callback: (data: T) => void): void => {
    this.traverseTitles(callback);
    this.traverseItems(callback);
  };

  /**
   * Traverse through every element inside multi depth data and execute callback.
   * The callback is only executed for pure data, so nested multi depth data are not targets
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {(data: T) => Promise<void>} callback Asynchronous callback to execute for every elements
   */
  traverseAsync = async (
    callback: (data: T) => Promise<void>,
  ): Promise<void> => {
    await this.traverseTitlesAsync(callback);
    await this.traverseItemsAsync(callback);
  };

  /**
   * Traverse through every title inside multi depth data and execute callback.
   * This method does not assure asynchronous of the callback (use traverseTitlesAsync instead)
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {callback: (title: T) => void} callback Callback to execute for every titles
   */
  traverseTitles = (callback: (title: T) => void): void => {
    const titlesToTraverse = MultiDepthDataUtils.extractTitles(
      this.multiDepthData,
    ) as T[];

    titlesToTraverse.forEach(title => callback(title));
  };

  /**
   * Traverse through every title inside multi depth data and execute callback.
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {callback: (title: T) => void} callback Asynchronous callback to execute for every titles
   */
  traverseTitlesAsync = async (
    callback: (title: T) => Promise<void>,
  ): Promise<void> => {
    const titlesToTraverse = MultiDepthDataUtils.extractTitles(
      this.multiDepthData,
    ) as T[];

    await Promise.all(titlesToTraverse.map(async title => callback(title)));
  };

  /**
   * Extract every title inside given multi depth data
   * @param {MultiDepthData} multiDepthData Multi depth data to extract titles
   * @returns {MultiDepthData['title'][]} Array which contains every extracted title (flat array in single level)
   */
  protected static extractTitles = (
    multiDepthData: MultiDepthData<any>,
  ): MultiDepthData['title'][] => {
    const titlesFromSubTree = multiDepthData.items
      .map(item => {
        if (!this.isMultiDepthData(item)) return [];

        // Another multi depth data nested
        return MultiDepthDataUtils.extractTitles(item);
      })
      .flat();

    return [multiDepthData.title, ...titlesFromSubTree];
  };

  /**
   * Traverse through every item inside multi depth data and execute callback.
   * This method does not assure asynchronous of the callback (use traverseItemsAsync instead)
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {callback: (item: T) => void} callback Callback to execute for every item
   */
  traverseItems = (callback: (item: T) => void): void => {
    const itemsToTraverse = MultiDepthDataUtils.extractItems(
      this.multiDepthData,
    ) as T[];

    itemsToTraverse.forEach(item => callback(item));
  };

  /**
   * Traverse through every item inside multi depth data and execute callback.
   * FYI, traversing will be use DFS if you care about orders of execution
   * @param {callback: (item: T) => void} callback Asynchronous callback to execute for every item
   */
  traverseItemsAsync = async (
    callback: (item: T) => Promise<void>,
  ): Promise<void> => {
    const itemsToTraverse = MultiDepthDataUtils.extractItems(
      this.multiDepthData,
    ) as T[];

    await Promise.all(itemsToTraverse.map(async item => callback(item)));
  };

  /**
   * Extract every item inside given multi depth data
   * @param {MultiDepthData} multiDepthData Multi depth data to extract items
   * @returns {MultiDepthData['items'][0][]} Array which contains every extracted items (flat array in single level)
   */
  protected static extractItems = (
    multiDepthData: MultiDepthData<any>,
  ): MultiDepthData['items'] => {
    return multiDepthData.items
      .map(item => {
        if (MultiDepthDataUtils.isMultiDepthData(item)) {
          return MultiDepthDataUtils.extractItems(item);
        }
        return [item];
      })
      .flat();
  };

  /**
   * Get whether the given data is multi depth data instance
   * @param {any} data Data to validate
   * @returns {boolean} True if the given data is an instance oof multi depth data
   */
  protected static isMultiDepthData = <U>(
    data: any,
  ): data is MultiDepthData<U> => {
    return data.title && data.items;
  };

  /**
   * Multi depth data to process
   */
  protected multiDepthData: MultiDepthData<T>;
}

export default MultiDepthDataUtils;
