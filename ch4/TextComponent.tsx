import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
const App = () => {
  return <Text>テキスト</Text>;
};
*/

/*
interface Props {
  name: string;
}

const MyComponent = (props: Props) => {
  return <View>{!!props.name && <Text>{props.name}</Text>}</View>;
};

const MyApp = () => {
  return <MyComponent name="Test" />;
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
});

const NestedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.base}>
        一部だけ<Text style={styles.bold}>太さ</Text>や<Text style={styles.red}>色</Text>を変えられます。
      </Text>
      <Text>2行目</Text>
    </View>
  );
};

export default NestedText;
