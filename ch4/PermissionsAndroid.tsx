import React from 'react';
import { Alert, PermissionsAndroid, View } from 'react-native';

const requestCameraPermission = async () => {
  try {
    const isGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    console.log(isGranted);
    if (isGranted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('許可ありがとうございます');
    } else {
      Alert.alert('カメラ使いたいな');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {
  React.useEffect(() => {
    requestCameraPermission();
  });
  return <View />;
};

export default App;
