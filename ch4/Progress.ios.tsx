// Progress.ios.tsx

import React from 'react';
import { ProgressViewIOS, ViewStyle } from 'react-native';

interface Props {
  progress: number;
  color: string;
  style: ViewStyle;
}

const Progress = (props: Props) => {
  return <ProgressViewIOS progress={props.progress} style={props.style} progressTintColor={props.color} />;
};

Progress.defaultProps = {
  color: '#0a7ffb',
};

export default Progress;
