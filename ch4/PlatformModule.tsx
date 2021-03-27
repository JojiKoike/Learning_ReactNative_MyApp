import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const label = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

const onPress = Platform.select({
  ios: () => {
    console.warn(Platform.OS, Platform.Version, Platform.isTV);
  },
  android: () => {
    console.warn(Platform.OS, Platform.Version, Platform.isTV);
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text onPress={onPress}>{label}</Text>
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
