import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

const App = () => {
  const onEndReached = React.useCallback(() => {
    setTimeout(() => {
      data.unshift({
        id: new Date().getTime().toString(),
        title: 'foo',
      });
    }, 200);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>}
      onEndReached={onEndReached}
    />
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
