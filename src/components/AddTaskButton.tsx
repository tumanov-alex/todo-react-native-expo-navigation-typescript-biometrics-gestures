import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

// @ts-ignore
import SendIcon from '../../assets/send.svg';

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
      <SendIcon width={35} height={35} />
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
