import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
  id: string;
  title: string;
}

const data: Array<Item> = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
  { id: 'fourth', title: 'よっつめ' },
  { id: 'fifth', title: 'いつつめ' },
  { id: 'sixth', title: 'むっつめ' },
  { id: 'seventh', title: 'ななつめ' },
];

const App = () => {
  const list = React.useRef<FlatList<Item>>(null);
  const scrollToThird = React.useCallback(() => {
    list?.current?.scrollToIndex({ index: 2 });
  }, [list]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollToThird}>
        <Text>Scroll to third</Text>
      </TouchableOpacity>
      <FlatList ref={list} data={data} renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    height: 400,
  },
});

export default App;
