import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DeleteButton } from '../../src/components/DeleteTaskButton';

it('renders correctly', () => {
  const { getByText } = render(<DeleteButton onPress={() => {}} />);
  expect(getByText('DELETE')).toBeTruthy();
});

it('calls onPress on button press', () => {
  const onPress = jest.fn();
  const { getByText } = render(<DeleteButton onPress={onPress} />);
  fireEvent.press(getByText('DELETE'));
  expect(onPress).toHaveBeenCalled();
});
