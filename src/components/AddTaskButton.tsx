import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { SendIcon } from '../icons/SendIcon';

interface AddTaskButtonProps {
  onTaskAdd: () => void;
}

export const AddTaskButton = ({ onTaskAdd }: AddTaskButtonProps) => {
  return (
    <TouchableHighlight
      underlayColor={'white'}
      onPress={onTaskAdd}
      style={styles.button}
    >
      <SendIcon width={35} height={35} testID='SendIcon' />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    paddingHorizontal: 25,
    height: '100%',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
