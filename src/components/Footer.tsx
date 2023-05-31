import { useState, memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { Input } from './Input';
import { AddTaskButton } from './AddTaskButton';
import { useStore } from '../store/useStore';

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
    backgroundColor: '#222',
    flex: 1,
    flexDirection: 'row',
  },
});
