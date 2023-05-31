import React from 'react';
import { render } from '@testing-library/react-native';

import { List } from '../../src/components/List';
import { TaskSlice } from '../../src/models/taskSlice';

describe('<List />', () => {
  const mockTasks: TaskSlice = {
    values: [
      { id: '1', label: 'Task 1', completed: false },
      { id: '2', label: 'Task 2', completed: false },
      { id: '3', label: 'Task 3', completed: true },
    ],
    addTask: jest.fn(),
    removeTask: jest.fn(),
    toggleCompleted: jest.fn(),
  };

  it('renders without crashing', () => {
    const { getByTestId } = render(<List tasks={mockTasks} />);

    expect(getByTestId('list')).toBeTruthy();
  });

  it('renders correct number of tasks', async () => {
    const { findByText } = render(<List tasks={mockTasks} />);

    expect(await findByText('Task 1')).toBeDefined();
    expect(await findByText('Task 3')).toBeDefined();
  });
});
