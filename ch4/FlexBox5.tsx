import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const app = () => {
  return (
    <View style={style.container}>
      <View style={style.texts}>
        <Text style={style.text1}>tax</Text>
        <Text style={style.text2}>10</Text>
        <Text style={style.text3}>%</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  text1: {
    fontSize: 16,
    color: 'red',
  },
  text2: {
    fontSize: 32,
    color: 'blue',
  },
  text3: {
    fontSize: 16,
    color: 'green',
  },
});

export default app;
