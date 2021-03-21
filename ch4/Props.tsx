import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  color: string;
  children: ReactNode;
  label: string;
}

const MyComponent = (props: Props) => {
  const { color, children, label } = props;
  return (
    <View>
      <Text style={{ color }}>{label}</Text>
      {children}
    </View>
  );
};

const App = () => {
  return (
    <MyComponent color="red" label="new">
      <Text>Hello</Text>
    </MyComponent>
  );
};

export default App;
