import { StoreState } from '../models/storeState';

export function deepMergeStore(
  savedState: StoreState, currentState: StoreState): StoreState {
  return {
    // filter: {
    //   ...currentState.filter,
    // },
    tasks: {
      ...currentState.tasks,
      ...savedState.tasks,
    },
    // theme: {
    //   ...currentState.theme,
    //   ...savedState.theme,
    // },
  };
}
