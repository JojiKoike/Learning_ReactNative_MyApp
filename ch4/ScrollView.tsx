import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const styles = StyleSheet.create({
  block: {
    width: 414,
    height: 400,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  pink: {
    backgroundColor: 'pink',
  },
});

const App = () => {
  return (
    <ScrollView>
      <Text style={[styles.block, styles.red]}>RED</Text>
      <Text style={[styles.block, styles.blue]}>BLUE</Text>
      <Text style={[styles.block, styles.green]}>GREEN</Text>
      <Text style={[styles.block, styles.yellow]}>YELLOW</Text>
      <Text style={[styles.block, styles.pink]}>PINK</Text>
    </ScrollView>
  );
};

export default App;
