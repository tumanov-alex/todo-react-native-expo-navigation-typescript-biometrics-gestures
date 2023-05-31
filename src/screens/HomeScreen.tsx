import React, { useMemo } from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

import { AppContent } from '../components/AppContent';

export function HomeScreen() {
  const keyboardBehavior = useMemo(
    () => Platform.OS === 'ios' ? 'padding' : 'height', []);

  return (
    <KeyboardAvoidingView
      behavior={keyboardBehavior}
      style={styles.flexOne}
      contentContainerStyle={styles.flexOne}
    >
      <AppContent />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
