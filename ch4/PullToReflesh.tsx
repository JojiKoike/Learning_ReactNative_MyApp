import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    try {
      setRefreshing(true);
      setTimeout(() => {
        data.unshift({
          id: new Date().getTime().toString(),
          title: 'foo',
        });
      }, 200);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <Text style={styles.label}>{item.title}</Text>}
      refreshing={refreshing}
      onRefresh={onRefresh}
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
