import { useStore } from '../store/useStore';
import React from 'react';
import { List } from './List';
import { Footer } from './Footer';

export const AppContent = () => {
  const tasks = useStore((state) => state.tasks);

  return (
    <React.Fragment>
      <List tasks={tasks} />

      <Footer />
    </React.Fragment>
  );
};
