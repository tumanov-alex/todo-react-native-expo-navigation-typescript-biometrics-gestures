import { GetState, SetState } from "zustand";

import { StoreState } from "./storeState";

export type StoreSlice<T extends object> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => T;
