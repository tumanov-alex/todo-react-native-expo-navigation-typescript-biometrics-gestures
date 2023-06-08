import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { AddTaskButton } from '../../src/components/AddTaskButton';

it('renders correctly', () => {
  const { getByTestId } = render(<AddTaskButton onTaskAdd={() => {}} />);
  expect(getByTestId('SendIcon')).toBeTruthy();
});

it('calls onTaskAdd on button press', () => {
  const onTaskAdd = jest.fn();
  const { getByTestId } = render(<AddTaskButton onTaskAdd={onTaskAdd} />);
  fireEvent.press(getByTestId('SendIcon'));
  expect(onTaskAdd).toHaveBeenCalled();
});
