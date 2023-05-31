import * as LocalAuthentication from 'expo-local-authentication';
import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { colors } from '../constants/colors';

type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

type AuthProps = {
  navigation: AuthScreenNavigationProp;
};

export function AuthScreen({ navigation }: AuthProps) {
  const onAuthSuccess = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to proceed',
    });

    if (result.success) {
      // Navigate to home screen upon successful authentication
      navigation.replace('Home');
    } else {
      Alert.alert('Unauthenticated', 'Unable to authenticate the user');
    }
  };
  const onAuthFailure = () => {
    Alert.alert(
      'Unavailable',
      'Biometric authentication is unavailable on this device',
    );
  }

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    hasHardware && isEnrolled
      ? onAuthSuccess()
      : onAuthFailure();
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please authenticate before using the app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  text: {
    color: 'white',
  },
});
