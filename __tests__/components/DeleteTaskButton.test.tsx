import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DeleteButton } from '../../src/components/DeleteTaskButton';

it('renders correctly', () => {
  const { getByTestId } = render(<DeleteButton
    onPress={() => {
    }} />);
  expect(getByTestId('DeleteIcon')).toBeTruthy();
});

it('calls onPress on button press', () => {
  const onPress = jest.fn();
  const { getByTestId } = render(<DeleteButton onPress={onPress} />);
  fireEvent.press(getByTestId('DeleteIcon'));
  expect(onPress).toHaveBeenCalled();
});
