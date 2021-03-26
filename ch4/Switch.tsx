import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

const App = () => {
  const [value, setValue] = React.useState(false);
  const onValueChange = (newValue: boolean) => {
    setValue(newValue);
  };
  return (
    <View style={styles.container}>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
