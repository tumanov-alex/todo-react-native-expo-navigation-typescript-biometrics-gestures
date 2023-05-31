import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createTaskSlice } from './createTaskSlice';
import { deepMergeStore } from '../utils/deepMergeStore';

import { StoreState } from '../models/storeState';
import { StoreSlice } from '../models/storeSlice';

const store: StoreSlice<StoreState> = (set, get) => ({
  tasks: createTaskSlice(set, get),
});
export const useStore = create<StoreState>()(
  persist(
    store,
    {
      name: 'todo',
      // zustand's way to use AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
      // custom merge function required because zustand merges shallowly by default, which makes functions declared outside the state root unreachable
      merge: (state, partialState) => deepMergeStore(
        state as StoreState, partialState),
    },
  ),
);
