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
});

export default App;
