import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const useControlledComponent = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return {
    value,
    onChangeText: handleChange,
  };
};

const App = () => {
  const familyName = useControlledComponent('');
  const personalName = useControlledComponent('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...familyName} />
      <TextInput style={styles.input} {...personalName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  },
});

export default App;
