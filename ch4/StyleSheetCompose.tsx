import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  style?: ViewStyle;
}

const MyComponent = (props: Props) => {
  const style = React.useMemo(() => StyleSheet.compose(styles.myComponent, props.style), [props.style]);
  return (
    <View style={style}>
      <Text>スタイル指定可能なコンポーネント</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <MyComponent style={{ backgroundColor: 'red' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myComponent: {
    width: 256,
    height: 32,
  },
});

export default App;
