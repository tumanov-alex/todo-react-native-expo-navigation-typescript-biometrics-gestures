import 'react-native-get-random-values';
import { v4 as uuid4 } from 'uuid';

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
            id: uuid4(),
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
