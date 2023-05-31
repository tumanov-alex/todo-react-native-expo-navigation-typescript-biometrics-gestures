import { Button, View, StyleSheet } from 'react-native';

interface DeleteButtonProps {
  onPress: () => void;
}

export const DeleteButton = ({ onPress }: DeleteButtonProps) => (
  <View style={styles.container}>
    <Button color="red" onPress={onPress} title="DELETE" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
});
