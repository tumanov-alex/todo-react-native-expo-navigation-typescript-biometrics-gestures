import { StoreState } from '../models/storeState';

export function deepMergeStore(
  savedState: StoreState, currentState: StoreState): StoreState {
  return {
    tasks: {
      ...currentState.tasks,
      ...savedState.tasks,
    },
  };
}
