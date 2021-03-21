import React from 'react';
import { Text } from 'react-native';
//import { View, Text, ViewStyle } from 'react-native';

/*
const App = () => {
  return (
    <View>
      <Text>1行目</Text>
      <Text>2行目</Text>
    </View>
  );
};
*/

const Fragment = () => {
  return (
    <>
      <Text>1行目</Text>
      <Text>2行目</Text>
    </>
  );
};

/*
interface Props {
  style?: ViewStyle;
}

const MyComponent = (props: Props) => {
  return (
    <View style={[props.style]}>
      <Text>スタイル設定可能なコンポーネント</Text>
    </View>
  );
};
*/

export default Fragment;
