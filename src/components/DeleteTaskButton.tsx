import { Button, View } from 'react-native';

interface DeleteButtonProps {
  onPress: () => void;
}

export const DeleteButton = ({ onPress }: DeleteButtonProps) => (
  <View
    style={{
      margin: 0,
      alignContent: 'center',
      justifyContent: 'center',
      width: 70,
    }}>

    <Button color="red" onPress={onPress} title="DELETE"/>
  </View>
);
