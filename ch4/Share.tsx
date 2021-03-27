import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const onShare = async () => {
  try {
    await Share.share({
      title: 'タイトル',
      message: '共有メッセージ',
    });
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onShare}>
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
