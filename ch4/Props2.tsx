import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  style: ViewStyle;
  onPress: () => void;
}

const ChildComponent = (props: Props) => {
  const { children, style, onPress } = props;

  return (
    <Text style={style} onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
});

const App = () => {
  return (
    <ChildComponent style={styles.button} onPress={() => console.log('Test')}>
      おして！
    </ChildComponent>
  );
};

export default App;
