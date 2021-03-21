import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  block: {
    width: '100%',
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
    <ScrollView style={styles.container}>
      <Text style={[styles.block, styles.red]}>RED</Text>
      <Text style={[styles.block, styles.blue]}>BLUE</Text>
      <Text style={[styles.block, styles.green]}>GREEN</Text>
      <Text style={[styles.block, styles.yellow]}>YELLOW</Text>
      <Text style={[styles.block, styles.pink]}>PINK</Text>
    </ScrollView>
  );
};

export default App;
