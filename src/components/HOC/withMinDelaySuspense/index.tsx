/* eslint-disable react/jsx-props-no-spreading */
import {
  Component,
  ComponentType,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from 'react';

/**
 * HOC for wrapping a component with suspense but with minimum amount time that loading fallback should be shown
 * @param {Component} WrappedComponent Component to wrap with this HOC
 * @param {ReactNode} fallback Fallback element which will be rendered during loading
 * @param {number} [minDelay] Minimum amount of time that the loading fallback should be shown (in milliseconds)
 */
function withSuspenseMinDelaySuspense<T>(
  WrappedComponent: ComponentType<T>,
  fallback: ReactNode,
  minDelay: number = 1000,
) {
  return function WithSuspenseMinDelaySuspenseComponent({ props }: T) {
    const [passedMinDelay, setPassedMinDelay] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setPassedMinDelay(true);
      }, minDelay);
    }, []);

    // if (!passedMinDelay) return fallback;
    return (
      <Suspense fallback={fallback}>
        <div
          style={{
            visibility: passedMinDelay ? 'visible' : 'hidden',
            position: 'absolute',
          }}>
          <WrappedComponent {...props} />
        </div>
        {!passedMinDelay && fallback}
      </Suspense>
    );
  };
}

export default withSuspenseMinDelaySuspense;
