import React from 'react';
import ErrorMessage from '../partials/ErrorMessage/ErrorMessage';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any): State {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
