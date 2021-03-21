import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

const App = () => {
  return <FlatList data={data} renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>} />;
};

const styles = StyleSheet.create({
  label: {
    height: 400,
  },
});

export default App;
