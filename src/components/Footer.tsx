import React, { useState, memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { Input } from './Input';
import { AddTaskButton } from './AddTaskButton';
import { useStore } from '../store/useStore';
// @ts-ignore
import SendIcon from '../../assets/send.svg';

// Footer component managing task input and addition to the task list
const FooterComponent = () => {
  const [taskLabel, setTaskLabel] = useState('');
  const tasks = useStore((state) => state.tasks);

  const onTaskAdd = useCallback(() => {
    if (taskLabel !== '') {
      tasks.addTask(taskLabel);
      setTaskLabel('');
    }
  }, [taskLabel]);

  return (
    <View style={styles.container}>
      <Input
        taskLabel={taskLabel}
        setTaskLabel={setTaskLabel}
        onTaskAdd={onTaskAdd}
      />

      <AddTaskButton onTaskAdd={onTaskAdd} />
    </View>
  );
};

export const Footer = memo(FooterComponent);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 50,
    backgroundColor: 'white',
  },
});
