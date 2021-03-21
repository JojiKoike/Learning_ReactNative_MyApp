import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
});

type Theme = typeof lightTheme | typeof darkTheme;
interface Context {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
});

const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={theme.container}>
        <Text
          onPress={() => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
          }}
          style={theme.label}
        >
          テーマ切り替え
        </Text>
        <Profile name="TestProfile" />
      </View>
    </ThemeContext.Provider>
  );
};

interface Props {
  name: string;
}
const Profile = (props: Props) => {
  const { theme } = React.useContext(ThemeContext);
  return <Text style={theme.label}>{props.name}</Text>;
};

export default App;
