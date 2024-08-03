import { create } from "zustand";
import { UxSceneSlice } from "./slice/uxscene.slice";
import { IUXSceneState } from "./interface/uxscene.interface";

export const UxSceneStore = create<IUXSceneState>((...args) => ({
  ...UxSceneSlice(...args),
}));
