import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppContent } from '../components/AppContent';

export function HomeScreen() {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.flexOne}
      contentContainerStyle={styles.flexOne}
    >
      <SafeAreaView style={styles.container}>
        <AppContent />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
