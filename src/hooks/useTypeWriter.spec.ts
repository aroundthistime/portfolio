/* eslint-disable no-restricted-syntax */
import { act, renderHook, waitFor } from '@testing-library/react';
import { range } from 'lodash';
import useTypeWriter from './useTypeWriter';

jest.useFakeTimers();

describe('useTypeWriter', () => {
  const TEST_SINGLE_STRING = 'Hello';
  const TEST_MULTIPLE_STRINGS = ['Hello', 'World'];

  const TYPEWRITE_SPEED = 100;

  it('types string based on time', async () => {
    const { result } = renderHook(() => useTypeWriter(TEST_SINGLE_STRING));

    expect(result.current.typingResult).toEqual('');

    for await (const i of range(1, TEST_SINGLE_STRING.length)) {
      act(() => {
        jest.advanceTimersByTime(TYPEWRITE_SPEED);
      });

      await waitFor(() => {
        expect(result.current.typingResult).toEqual(
          TEST_SINGLE_STRING.slice(0, i),
        );
      });
    }
  });

  it('can handle multiple strings', async () => {
    const { result } = renderHook(() => useTypeWriter(TEST_MULTIPLE_STRINGS));

    expect(result.current.typingResult).toEqual(['', '']);

    act(() => {
      jest.advanceTimersByTime(
        TYPEWRITE_SPEED * TEST_MULTIPLE_STRINGS[0].length,
      );
    });

    await waitFor(() => {
      expect(result.current.typingResult).toEqual([
        TEST_MULTIPLE_STRINGS[0],
        '',
      ]);
    });

    act(() => {
      jest.advanceTimersByTime(
        TYPEWRITE_SPEED * TEST_MULTIPLE_STRINGS[1].length,
      );
    });

    await waitFor(() => {
      expect(result.current.typingResult).toEqual(TEST_MULTIPLE_STRINGS);
    });
  });

  it('stops writing when processing is done', async () => {
    const { result } = renderHook(() => useTypeWriter(TEST_SINGLE_STRING));

    act(() => {
      jest.advanceTimersByTime(TYPEWRITE_SPEED * TEST_SINGLE_STRING.length + 1);
    });

    await waitFor(() => {
      expect(result.current.typingResult).toEqual(TEST_SINGLE_STRING);
    });
  });

  it('can restart typing after processing is done', async () => {
    const { result } = renderHook(() => useTypeWriter(TEST_SINGLE_STRING));

    act(() => {
      jest.advanceTimersByTime(TYPEWRITE_SPEED * TEST_SINGLE_STRING.length);
    });

    // result.current.restartTypeWriting();

    act(() => {
      result.current.restartTypeWriting();
    });

    await waitFor(() => {
      expect(result.current.typingResult).toEqual('');
    });
  });

  it('can restart typing in the middle of processing', async () => {
    const { result } = renderHook(() => useTypeWriter(TEST_SINGLE_STRING));

    act(() => {
      jest.advanceTimersByTime(
        TYPEWRITE_SPEED * Math.floor(TEST_SINGLE_STRING.length / 2),
      );
    });

    act(() => {
      result.current.restartTypeWriting();
    });

    await waitFor(() => {
      expect(result.current.typingResult).toEqual('');
    });
  });
});
