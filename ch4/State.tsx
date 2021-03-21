import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

const App = () => {
  const [state, setState] = React.useState(true);

  return (
    <Text
      style={styles.container}
      onPress={() => {
        setState(!state);
      }}
    >
      State is {state.toString()}
    </Text>
  );
};

export default App;
