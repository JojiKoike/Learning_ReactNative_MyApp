import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

export default function App() {
  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={containerStyle}>
      <Text>Hello</Text>
    </View>
  );
}
