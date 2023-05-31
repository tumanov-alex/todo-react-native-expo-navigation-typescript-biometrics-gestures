import uuid from 'react-native-uuid';

import { seedTasks } from './seedTasks';

import { StoreSlice } from '../models/storeSlice';
import { TaskSlice } from '../models/taskSlice';

export const createTaskSlice: StoreSlice<TaskSlice> = (set) => ({
  values: seedTasks,

  addTask: (label: string) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: [
          ...state.tasks.values,
          {
            id: String(uuid.v4()),
            label,
            completed: false,
          },
        ],
      },
    }));
  },
  removeTask: (id: string) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.filter((task) => task.id !== id),
      },
    }));
  },
  toggleCompleted: (id: string) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        }),
      },
    }));
  },
});
