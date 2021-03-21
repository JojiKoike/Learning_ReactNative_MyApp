import React from 'react';
import { Text, View } from 'react-native';

/*
const App = () => {
  return <Text>テキスト</Text>;
};
*/

interface Props {
  name: string;
}

const MyComponent = (props: Props) => {
  return <View>{!!props.name && <Text>{props.name}</Text>}</View>;
};

const MyApp = () => {
  return <MyComponent name="Test" />;
};

export default MyApp;
