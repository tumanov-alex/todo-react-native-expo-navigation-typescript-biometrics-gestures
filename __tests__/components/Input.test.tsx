import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Input } from '../../src/components/Input';

it('renders correctly', () => {
  const { getByPlaceholderText } = render(<Input
    taskLabel=""
    setTaskLabel={() => {
    }}
    onTaskAdd={() => {
    }} />);
  expect(getByPlaceholderText('Add a task')).toBeTruthy();
});

it('calls onTaskAdd on submit', () => {
  const onTaskAdd = jest.fn();
  const { getByPlaceholderText } = render(<Input
    taskLabel=""
    setTaskLabel={() => {
    }}
    onTaskAdd={onTaskAdd} />);
  fireEvent(getByPlaceholderText('Add a task'), 'onSubmitEditing');
  expect(onTaskAdd).toHaveBeenCalled();
});
