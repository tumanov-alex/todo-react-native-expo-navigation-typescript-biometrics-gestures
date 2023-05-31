import { useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { useStore } from '../store/useStore';
import { Task } from './Task';

import { Task as ITask } from '../models/task';

export const List = () => {
  const tasks = useStore((state) => state.tasks);

  const renderItem = useCallback(({ item: task }: { item: ITask }) => (
    <Task
      label={task.label}
      completed={task.completed}
      onDelete={() => tasks.removeTask(task.id)}
      onToggle={() => tasks.toggleCompleted(task.id)}
    />
  ), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.values}
        renderItem={renderItem}
        keyExtractor={(task) => task.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: '#333',
  },
});
