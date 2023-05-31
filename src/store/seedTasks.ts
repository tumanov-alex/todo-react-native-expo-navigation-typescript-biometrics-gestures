import uuid from 'react-native-uuid';

import { Task } from '../models/task';

export const seedTasks: Task[] = [
  {
    id: String(uuid.v4()),
    label: 'Hello, world! 🌍',
    completed: false,
  },
  {
    id: String(uuid.v4()),
    label: "Why don't scientist trust atoms? Because they make up everything! 🤬",
    completed: false,
  },
  {
    id: String(uuid.v4()),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 🤖',
    completed: false,
  },
];
