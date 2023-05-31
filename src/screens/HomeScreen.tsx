import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { List } from '../components/List';
import { Footer } from '../components/Footer';
import { useStore } from '../store/useStore';

export function HomeScreen() {
  const tasks = useStore((state) => state.tasks);

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.flexOne}
      contentContainerStyle={styles.flexOne}
    >
      <SafeAreaView style={styles.container}>
        <List tasks={tasks} />

        <Footer />
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
