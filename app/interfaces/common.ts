export interface ICountry {
  country_id: string;
  probability: number;
}

export interface ILoadingAndErrorProps {
  loading: boolean;
  error: Error | null;
  handleLoading: (loadingState: boolean) => void;
  handleError: (err: Error | null) => void;
}
