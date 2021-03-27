import React from 'react';
import { BackHandler, View } from 'react-native';

const App = () => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.warn('hardware back pressed');
      return true;
    });
    return () => {
      backHandler.remove();
    };
  }, []);
  return <View />;
};

export default App;
