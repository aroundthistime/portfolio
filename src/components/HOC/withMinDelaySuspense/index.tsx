/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType, ReactNode, Suspense, useEffect, useState } from 'react';
import { Container } from './style';

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

    return (
      <Suspense fallback={fallback}>
        <Container $passedMinDelay={passedMinDelay}>
          <WrappedComponent {...props} />
        </Container>
        {!passedMinDelay && fallback}
      </Suspense>
    );
  };
}

export default withSuspenseMinDelaySuspense;
