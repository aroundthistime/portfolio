/* eslint-disable no-promise-executor-return */
import React, { useEffect } from 'react';
import { act, render, screen, waitFor } from '__test__/test-utils';
import withSuspenseMinDelaySuspense from '.';

jest.useFakeTimers();

const LOAD_DELAY = 1000;

const dummyFunction = jest.fn();

let LazyComponent: React.LazyExoticComponent<() => JSX.Element>;

describe('withMinDelaySuspense', () => {
  const FallbackComponent = () => {
    return <div data-testid="fallback" />;
  };

  beforeEach(() => {
    dummyFunction.mockRestore();

    // Reimport on every test to set loading time
    LazyComponent = React.lazy(async () => {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

      await sleep(LOAD_DELAY);

      return {
        default: () => {
          useEffect(() => {
            dummyFunction();
          }, []);

          return <div data-testid="main" />;
        },
      };
    });
  });

  it('shows component correctly if min delay is longer than loading time', async () => {
    const MIN_DELAY = LOAD_DELAY * 2;

    const TestComponentWithMinDelay = withSuspenseMinDelaySuspense(
      LazyComponent,
      <FallbackComponent />,
      MIN_DELAY,
    );

    render(<TestComponentWithMinDelay />);

    await waitFor(() => {
      expect(screen.queryByTestId('main')).toBeNull();
      expect(screen.getByTestId('fallback')).toBeVisible();
    });

    act(() => {
      jest.advanceTimersByTime(LOAD_DELAY);
    });

    await waitFor(() => {
      expect(screen.getByTestId('main')).not.toBeVisible();
      expect(screen.getByTestId('fallback')).toBeVisible();
    });

    act(() => {
      jest.advanceTimersByTime(MIN_DELAY - LOAD_DELAY);
    });

    await waitFor(() => {
      expect(screen.getByTestId('main')).toBeVisible();
      expect(screen.queryByTestId('fallback')).toBeNull();
    });
  });

  it('shows component correctly if loading is longer than min delay', async () => {
    const MIN_DELAY = LOAD_DELAY / 2;

    const TestComponentWithMinDelay = withSuspenseMinDelaySuspense(
      LazyComponent,
      <FallbackComponent />,
      MIN_DELAY,
    );

    render(<TestComponentWithMinDelay />);

    await waitFor(() => {
      expect(screen.queryByTestId('main')).toBeNull();
      expect(screen.getByTestId('fallback')).toBeVisible();
    });

    act(() => {
      jest.advanceTimersByTime(MIN_DELAY);
    });

    await waitFor(() => {
      expect(screen.queryByTestId('main')).toBeNull();
      expect(screen.getByTestId('fallback')).toBeVisible();
    });

    act(() => {
      jest.advanceTimersByTime(LOAD_DELAY - MIN_DELAY);
    });

    await waitFor(() => {
      expect(screen.getByTestId('main')).toBeVisible();
      expect(screen.queryByTestId('fallback')).toBeNull();
    });
  });

  it('processes component in invisible state during delay', async () => {
    const MIN_DELAY = LOAD_DELAY * 2;

    const TestComponentWithMinDelay = withSuspenseMinDelaySuspense(
      LazyComponent,
      <FallbackComponent />,
      MIN_DELAY,
    );

    render(<TestComponentWithMinDelay />);

    await waitFor(() => {
      expect(dummyFunction).not.toHaveBeenCalled();
    });

    act(() => {
      jest.advanceTimersByTime(LOAD_DELAY);
    });

    await waitFor(() => {
      expect(dummyFunction).toHaveBeenCalledTimes(1);
    });

    act(() => {
      jest.advanceTimersByTime(MIN_DELAY - LOAD_DELAY);
    });

    await waitFor(() => {
      expect(dummyFunction).toHaveBeenCalledTimes(1);
    });
  });
});
