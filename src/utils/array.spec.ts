import {
  addBetweenElements,
  getFilledArray,
  getRandomItemFromArray,
} from './array';

describe('getRandomItemFromArray', () => {
  it('returns element inside array', () => {
    const PRIMITIVE_ARRAY = [1, 2, 3, 4, 5];
    expect(
      PRIMITIVE_ARRAY.includes(getRandomItemFromArray(PRIMITIVE_ARRAY)),
    ).toBeTruthy();

    const OBJECT_ARRAY = [{ x: 1 }, { x: 2 }];
    expect(
      OBJECT_ARRAY.includes(getRandomItemFromArray(OBJECT_ARRAY)),
    ).toBeTruthy();
  });

  it('returns undefined if given array is empty', () => {
    expect(getRandomItemFromArray([])).toStrictEqual(undefined);
  });
});

describe('getFilledArray', () => {
  const LENGTH = 5;
  const PRIMTIIVE_ELEMENT = 1;
  let OBJECT_ELEMENT: Record<'x', number>;

  beforeEach(() => {
    OBJECT_ELEMENT = {
      x: 1,
    };
  });

  it('fills array with given value', () => {
    const filledArray = getFilledArray(PRIMTIIVE_ELEMENT, LENGTH);

    expect(
      filledArray.every(element => element === PRIMTIIVE_ELEMENT),
    ).toBeTruthy();
  });

  it('fills array using given value but as different objects', () => {
    const filledArray = getFilledArray(OBJECT_ELEMENT, LENGTH);

    expect(filledArray[0]).toEqual(OBJECT_ELEMENT);
    expect(filledArray[0]).not.toBe(OBJECT_ELEMENT);

    OBJECT_ELEMENT.x = 2;
    expect(filledArray[0]).not.toEqual(OBJECT_ELEMENT);
  });

  it('fills array with elements independent from each other', () => {
    const filledArray = getFilledArray(OBJECT_ELEMENT, LENGTH);

    expect(filledArray[0]).toEqual(filledArray[1]);
    expect(filledArray[0]).not.toBe(filledArray[1]);

    filledArray[0].x = 2;
    expect(filledArray[0]).not.toEqual(filledArray[1]);
  });

  it('fills array with given size', () => {
    expect(getFilledArray(PRIMTIIVE_ELEMENT, LENGTH).length).toEqual(LENGTH);
  });

  it('throws error if given size is smaller than 0', () => {
    expect(() => {
      getFilledArray(PRIMTIIVE_ELEMENT, -1);
    }).toThrow();
  });
});

describe('addBetweenElement', () => {
  let ORIGINAL_ARRAY: Array<number>;

  beforeEach(() => {
    ORIGINAL_ARRAY = [1, 2, 3, 4, 5];
  });

  it('adds given element inside array', () => {
    const addedArray = addBetweenElements(ORIGINAL_ARRAY, -1);
    expect(addedArray).toEqual([1, -1, 2, -1, 3, -1, 4, -1, 5]);
  });

  it('adds elements in between as independent objects', () => {
    const OBJECT_ELEMENT = {
      x: 1,
    };
    const addedArray = addBetweenElements(ORIGINAL_ARRAY, OBJECT_ELEMENT);

    expect(addedArray[1]).toEqual(addedArray[3]);
    expect(addedArray[1]).not.toBe(addedArray[3]);
  });

  it('does not change original elements', () => {
    const addedArray = addBetweenElements(ORIGINAL_ARRAY, -1);
    ORIGINAL_ARRAY.every(element => {
      expect(addedArray).toContain(element);
    });
  });

  it('adds element without changing the original array', () => {
    const savedOriginalArray = [...ORIGINAL_ARRAY];

    addBetweenElements(ORIGINAL_ARRAY, -1);

    expect(savedOriginalArray).toEqual(ORIGINAL_ARRAY);
  });

  it('returns empty array if given array is empty', () => {
    expect(addBetweenElements([], -1)).toEqual([]);
  });
});
