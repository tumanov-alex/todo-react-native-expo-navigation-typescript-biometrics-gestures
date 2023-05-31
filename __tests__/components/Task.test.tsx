import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Task } from '../../src/components/Task';

it('renders correctly and can be toggled and deleted', () => {
  const onToggle = jest.fn();
  const onDelete = jest.fn();

  const { getByText } = render(
    <Task
      label="Test Task"
      completed={false}
      onToggle={onToggle}
      onDelete={onDelete} />,
  );

  const taskText = getByText('Test Task');
  fireEvent.press(taskText);
  expect(onToggle).toHaveBeenCalled();

  const deleteButton = getByText('DELETE');
  fireEvent.press(deleteButton);
  expect(onDelete).toHaveBeenCalled();
});
