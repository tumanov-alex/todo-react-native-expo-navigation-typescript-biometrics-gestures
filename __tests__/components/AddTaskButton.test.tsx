import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { AddTaskButton } from '../../src/components/AddTaskButton';

it('renders correctly', () => {
  const { getByText } = render(<AddTaskButton onTaskAdd={() => {}} />);
  expect(getByText('Add')).toBeTruthy();
});

it('calls onTaskAdd on button press', () => {
  const onTaskAdd = jest.fn();
  const { getByText } = render(<AddTaskButton onTaskAdd={onTaskAdd} />);
  fireEvent.press(getByText('Add'));
  expect(onTaskAdd).toHaveBeenCalled();
});
