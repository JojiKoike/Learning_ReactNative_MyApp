import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const onPress = React.useCallback(async () => {
    try {
      const URL = 'https://google.co';
      const isSupported = await Linking.canOpenURL(URL);
      if (!isSupported) {
        Alert.alert(`can not handle ${URL}`);
        return;
      }
      Linking.openURL(URL);
    } catch (e) {
      Alert.alert(`unknown error: ${e.message}`);
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>open link</Text>
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
