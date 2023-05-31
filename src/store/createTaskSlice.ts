import uuid from 'react-native-uuid';

import { seedTasks } from './seedTasks';

import { StoreSlice } from '../models/storeSlice';
import { TaskSlice } from '../models/taskSlice';

export const createTaskSlice: StoreSlice<TaskSlice> = (set) => ({
  values: seedTasks, // Initialize the state with seed tasks

  // Define an action for adding a task
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
  // Define an action for removing a task
  removeTask: (id: string) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.filter((task) => task.id !== id),
      },
    }));
  },
  // Define an action for toggling a task's completion status
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
