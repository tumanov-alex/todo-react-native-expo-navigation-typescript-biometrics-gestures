import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

interface InputProps {
  taskLabel: string;
  setTaskLabel: React.Dispatch<React.SetStateAction<string>>;
  onTaskAdd: () => void;
}

export const Input = ({ taskLabel, setTaskLabel, onTaskAdd }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={taskLabel}
        placeholder={'Add a task'}
        onChange={(e) => setTaskLabel(e.nativeEvent.text)}
        onSubmitEditing={onTaskAdd}
        returnKeyLabel={'Add'}
        style={styles.input}
      />
    </View>
  );
};

const backgroundColor = 'white';
const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    flex: 1,
    width: '100%',
    backgroundColor,
  },
  input: {
    fontSize: 30,
    flex: 1,
    backgroundColor,
    marginLeft: 20,
  },
});
