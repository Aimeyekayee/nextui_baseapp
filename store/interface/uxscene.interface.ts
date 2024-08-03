export interface IUXSceneState {
  isLoading: boolean;
  isFetched: boolean;

  setIsLoading: (isLoading: boolean) => void;
  setIsFetched: (isFetched: boolean) => void;
}
