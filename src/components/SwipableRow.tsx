import React, { useRef, ReactNode } from 'react';
import { Animated, StyleSheet, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

interface SwipeableRowProps {
  button: ReactNode;
  onButtonPress: () => void;
  children: ReactNode;
}

export const SwipeableRow = ({ button, onButtonPress, children }: SwipeableRowProps) => {
  const swipeableRow = useRef<Swipeable | null>(null);

  const renderRightAction = (button: ReactNode, color: string, x: number, progress: Animated.AnimatedInterpolation<number>) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={onButtonPress}>
          {button}
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
      {renderRightAction(button, 'transparent', 64, progress)}
    </View>
  );

  return (
    <Swipeable
      ref={swipeableRow}
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={(progress) => renderRightActions(progress)}>
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
