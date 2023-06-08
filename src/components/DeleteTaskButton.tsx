import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import { DeleteIcon } from '../icons/DeleteIcon';

interface DeleteButtonProps {
  onPress: () => void;
}

export const DeleteButton = ({ onPress }: DeleteButtonProps) => (
  <View style={styles.container}>
    <Pressable onPress={onPress}>
      <DeleteIcon width={25} height={25} testID='DeleteIcon' />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});
