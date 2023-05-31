import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

// @ts-ignore
import DeleteIcon from '../../assets/delete.svg';

interface DeleteButtonProps {
  onPress: () => void;
}

export const DeleteButton = ({ onPress }: DeleteButtonProps) => (
  <View style={styles.container}>
    <Pressable onPress={onPress}>
      <DeleteIcon width={25} height={25} />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});
