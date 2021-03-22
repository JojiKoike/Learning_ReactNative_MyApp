import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
      ListHeaderComponent={() => <Text style={styles.header}>Header</Text>}
      ListFooterComponent={() => <Text style={styles.footer}>Footer</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    height: 400,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  header: {
    height: 200,
    fontSize: 14,
    borderWidth: 1,
  },
  footer: {
    height: 100,
    fontSize: 16,
    borderWidth: 1,
  },
});

export default App;
