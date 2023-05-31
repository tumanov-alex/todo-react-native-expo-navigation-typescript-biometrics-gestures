import { useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Task } from './Task';

import { Task as ITask } from '../models/task';
import { TaskSlice } from '../models/taskSlice';

export const List = ({ tasks }: { tasks: TaskSlice }) => {
  const renderItem = useCallback(({ item: task }: { item: ITask }) => (
    <Task
      label={task.label}
      completed={task.completed}
      onDelete={() => tasks.removeTask(task.id)}
      onToggle={() => tasks.toggleCompleted(task.id)}
    />
  ), []);

  return (
    <View style={styles.container} testID={'list'}>
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
