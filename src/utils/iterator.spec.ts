import cloneDeep from 'lodash/cloneDeep';
import { replaceRecursively } from './iterator';

describe('replaceRecursively', () => {
  const REPLACE_FROM = 'target';
  const REPLACE_TO = 'replaced';

  const VALIDATOR = (item: any): item is any => item === REPLACE_FROM;
  const CONVERTER = (item: any) => REPLACE_TO;

  it('should handle primitive data', () => {
    expect(
      replaceRecursively<string, string>(REPLACE_FROM, VALIDATOR, CONVERTER),
    ).toEqual(REPLACE_TO);
  });

  it('should handle objects', () => {
    const DATA = {
      a: REPLACE_FROM,
      b: {
        c: 2,
        d: {
          e: REPLACE_FROM,
        },
      },
    };

    expect(replaceRecursively(DATA, VALIDATOR, CONVERTER)).toEqual({
      a: REPLACE_TO,
      b: {
        c: 2,
        d: {
          e: REPLACE_TO,
        },
      },
    });
  });

  it('should handle arrays', () => {
    const DATA = [1, REPLACE_FROM, 3, 4, REPLACE_FROM];

    expect(replaceRecursively(DATA, VALIDATOR, CONVERTER)).toEqual([
      1,
      REPLACE_TO,
      3,
      4,
      REPLACE_TO,
    ]);
  });

  it('should handle complex data type', () => {
    const DATA = {
      a: 1,
      b: [
        REPLACE_FROM,
        {
          c: REPLACE_FROM,
        },
        2,
      ],
    };

    expect(replaceRecursively(DATA, VALIDATOR, CONVERTER)).toEqual({
      a: 1,
      b: [
        REPLACE_TO,
        {
          c: REPLACE_TO,
        },
        2,
      ],
    });
  });

  it('should not affect original data', () => {
    const DATA = {
      a: REPLACE_FROM,
      b: {
        c: 2,
        d: {
          e: REPLACE_FROM,
        },
      },
    };

    const inputCopy = cloneDeep(DATA);

    replaceRecursively(DATA, VALIDATOR, CONVERTER);

    expect(DATA).toEqual(inputCopy);
  });

  it('should not change anything if condition is not met', () => {
    const DATA = {
      a: REPLACE_FROM,
      b: {
        c: 2,
        d: {
          e: REPLACE_FROM,
        },
      },
    };

    const ALWAYS_FAIL_VALIDATOR = (item: any): item is any => false;

    expect(replaceRecursively(DATA, ALWAYS_FAIL_VALIDATOR, CONVERTER)).toEqual(
      DATA,
    );
  });

  it('should replace based on original value', () => {
    const DATA = [1, 2, 3];
    const validator = (item: number): item is 2 => item === 2;
    const converterFunc = (item: number) => item * 10;

    expect(replaceRecursively(DATA, validator, converterFunc)).toEqual([
      1, 20, 3,
    ]);
  });
});
