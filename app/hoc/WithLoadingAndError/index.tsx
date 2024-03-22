import { ILoadingAndErrorProps } from "@/app/interfaces/common";
import React, { useState } from "react";

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
      if (err !== null) {
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    };

    const loadingAndErrorProps: ILoadingAndErrorProps = {
      loading,
      error,
      handleLoading,
      handleError,
    };

    return <WrappedComponent {...props} {...loadingAndErrorProps} />;
  };

  return HOC;
};

export default withLoadingAndError;
