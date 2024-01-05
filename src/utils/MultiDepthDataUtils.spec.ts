import cloneDeep from 'lodash/cloneDeep';
import range from 'lodash/range';
import { MultiDepthData } from '@/types/MultiDepthData';
import MultiDepthDataUtils from './MultiDepthDataUtils';

describe('MultiDepthDataUtils', () => {
  let TEST_DATA: MultiDepthData<number>;
  let multiDepthDataUtils: MultiDepthDataUtils<number>;

  beforeEach(() => {
    TEST_DATA = {
      title: 1,
      items: [
        2,
        {
          title: 3,
          items: [4, 5],
        },
      ],
    };

    multiDepthDataUtils = new MultiDepthDataUtils(TEST_DATA);
  });

  it('can convert data without affecting original data', () => {
    const originalData = cloneDeep(TEST_DATA);

    multiDepthDataUtils.convertAllDataInside(data => data + 1);

    expect(multiDepthDataUtils.data).toEqual({
      title: 2,
      items: [
        3,
        {
          title: 4,
          items: [5, 6],
        },
      ],
    });

    expect(TEST_DATA).toEqual(originalData);
  });

  it('can traverse data synchronously', () => {
    const dataset: number[] = [];
    multiDepthDataUtils.traverse(data => {
      dataset.push(data);
    });

    range(1, 6).forEach(i => {
      expect(dataset).toContain(i);
    });
  });

  it('can traverse data asynchronously', async () => {
    const increaseAsync = (data: number): Promise<number> => {
      return new Promise((resolve, reject) => {
        resolve(data + 1);
      });
    };

    const dataset: number[] = [];

    await multiDepthDataUtils.traverseAsync(async data => {
      const increasedData = await increaseAsync(data);
      dataset.push(increasedData);
    });

    range(2, 7).forEach(i => {
      expect(dataset).toContain(i);
    });
  });

  it('can traverse without affecting data by return value', () => {
    const originalData = cloneDeep(TEST_DATA);

    multiDepthDataUtils.traverse(data => {
      // eslint-disable-next-line no-param-reassign
      data += 1;
    });

    expect(multiDepthDataUtils.data).toEqual(originalData);
  });
});
