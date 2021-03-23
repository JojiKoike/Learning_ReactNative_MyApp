import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import md5 from 'md5';

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>}
      keyExtractor={item => md5(JSON.stringify(item))}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    width: 200,
  },
});

export default App;
