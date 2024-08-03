import { StateCreator } from "zustand";
import { IUXSceneState } from "../interface/uxscene.interface";

export const UxSceneSlice: StateCreator<IUXSceneState> = (set) => ({
  isLoading: false,
  isFetched: false,

  setIsLoading(isLoading) {
    set({ isLoading });
  },
  setIsFetched(isFetched) {
    set({ isFetched });
  },
});
