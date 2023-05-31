import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Swipeable } from 'react-native-gesture-handler';

import { DeleteButton } from './DeleteTaskButton';

import { Task as ITask } from '../models/task';

interface TaskProps extends Omit<ITask, 'id'> {
  onDelete: () => void;
  onToggle: () => void;
}

export const Task = ({ label, completed, onDelete, onToggle }: TaskProps) => {
  const renderRightActions = useCallback(() => (
    <DeleteButton onPress={onDelete} />
  ), []);

  return (
    <View style={styles.container}>
      <Swipeable
        renderRightActions={renderRightActions}
        overshootRight={false}
      >
        <BouncyCheckbox
          isChecked={completed}
          onPress={onToggle}
          text={label}
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          textStyle={styles.textStyle}
          textContainerStyle={styles.textContainerStyle}
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.innerIconStyle}
        />
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 80,
    flex: 1,
  },
  textStyle: {
    fontWeight: 'bold',
  },
  textContainerStyle: {
    width: '100%'
  },
  iconStyle: {
    borderColor: 'red',
  },
  innerIconStyle: {
    borderWidth: 2,
  },
});
