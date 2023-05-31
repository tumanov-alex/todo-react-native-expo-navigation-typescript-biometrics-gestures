import { Task } from './task';
export interface TaskSlice {
  values: Task[];
  addTask: (label: string) => void;
  removeTask: (id: string) => void;
  toggleCompleted: (id: string) => void;
}
