import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface AddTaskButtonProps {
  onTaskAdd: () => void;
}

export const AddTaskButton = ({ onTaskAdd }: AddTaskButtonProps) => {
  return (
    <Pressable onPress={onTaskAdd} style={styles.button}>
      <Text style={styles.text}>Add</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    borderRadius: 500,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
