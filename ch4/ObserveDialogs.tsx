import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const useErrorModalDialog = (initialErrors: Array<string>) => {
  const [needsToShow, setNeedsToShow] = React.useState(true);
  const [errors, setErrors] = React.useState(initialErrors);
  React.useEffect(() => {
    if (errors.length > 0 && needsToShow) {
      setNeedsToShow(false);
      Alert.alert(errors[0], 'message', [
        {
          text: 'OK',
          onPress: () => {
            setErrors(errors.filter((_, index) => index !== 0));
            setNeedsToShow(true);
          },
        },
      ]);
    }
  }, [needsToShow, errors]);

  const addError = (newError: string) => {
    setErrors([...errors, newError]);
  };

  return addError;
};

const App = () => {
  const addError = useErrorModalDialog(['1st', '2nd', '3rd']);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => addError('New Error')}>
        <Text>Generate error</Text>
      </TouchableOpacity>
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
