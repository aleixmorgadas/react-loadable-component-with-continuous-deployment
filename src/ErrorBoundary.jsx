import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo,
      })
      // You can also log error messages to an error reporting service here
    }
  
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div className="error-boundary">
            <h2>Something went wrong 😖</h2>
            <button onClick={() => window.location.reload()}>Reload Application</button>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;