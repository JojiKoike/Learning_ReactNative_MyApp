import React from 'react';
import { Text, View } from 'react-native';

const label = 'My first component';
const isNumber = 0;
const needsToShowDetail: boolean = false;

export default function MyComponent() {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{7 + 19 + 16}</Text>
      {false}
      {null}
      {undefined}
      {isNumber ? <Text>42</Text> : <Text>foo</Text>}
      {needsToShowDetail && <Text>式の評価結果です</Text>}
    </View>
  );
}
