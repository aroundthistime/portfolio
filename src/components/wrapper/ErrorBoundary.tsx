import React from 'react';

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
      return <h1>에러가 발생했습니다.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
