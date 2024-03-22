import React, { useState } from "react";

interface LoadingAndErrorProps {
  loading: boolean;
  error: Error | null;
}

const withLoadingAndError = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC = (props: P): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const handleLoading = (loadingState: boolean) => {
      setLoading(loadingState);
    };

    const handleError = (err: Error | null) => {
      setError(err);
    };

    const loadingAndErrorProps: LoadingAndErrorProps = {
      loading,
      error,
    };

    return (
      <WrappedComponent
        {...props}
        {...loadingAndErrorProps}
        handleLoading={handleLoading}
        handleError={handleError}
      />
    );
  };

  return HOC;
};

export default withLoadingAndError;
