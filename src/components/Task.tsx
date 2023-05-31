import React from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { SwipeableRow } from './SwipableRow';

import { DeleteButton } from './DeleteTaskButton';

import { Task as ITask } from '../models/task';

interface TaskProps extends Omit<ITask, 'id'> {
  onDelete: () => void;
  onToggle: () => void;
}

export const Task = ({ label, completed, onDelete, onToggle }: TaskProps) => {
  return (
    <View style={styles.container}>
      <SwipeableRow
        button={<DeleteButton onPress={onDelete} />}
        onButtonPress={onDelete}
      >
        <BouncyCheckbox
          isChecked={completed}
          onPress={onToggle}
          text={label}
          size={25}
          fillColor={checkboxColor}
          unfillColor="#FFFFFF"
          textStyle={styles.textStyle}
          textContainerStyle={styles.textContainerStyle}
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.innerIconStyle}
        />
      </SwipeableRow>
    </View>
  );
};

const checkboxColor = '#6c75d2';
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 80,
    textWrap: 'wrap',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#ddd',
  },
  textContainerStyle: {
    width: '100%',
    textWrap: 'wrap',
  },
  iconStyle: {
    borderColor: checkboxColor,
  },
  innerIconStyle: {
    borderWidth: 2,
  },
});
