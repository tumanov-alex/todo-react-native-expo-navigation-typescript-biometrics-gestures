import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useStore } from '../store/useStore';
import { List } from './List';
import { Footer } from './Footer';
import { colors } from '../constants/colors';

export const AppContent = () => {
  const tasks = useStore((state) => state.tasks);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <List tasks={tasks} />
      </SafeAreaView>

      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: colors.dark,
  },
});
