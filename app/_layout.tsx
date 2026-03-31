import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/src/context/ThemeContext';
import { themes } from '@/src/constants/themes';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';


export default function RootLayout() {
  const { theme } = useTheme();


  return (
    <ThemeProvider>
      <StatusBar style="auto" />

      <Drawer
        drawerContent={() => <DrawerContent />}
        screenOptions={{
          headerShown: false,
          drawerStyle: { backgroundColor: theme.background, width: '80%' },
          drawerActiveTintColor: theme.tabActiveTint,
          drawerInactiveTintColor: theme.tabInactiveTint,
        }}
      />

    </ThemeProvider>
  );
}


function DrawerContent() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === themes.dark;

  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: theme.secondary_background, position: "relative" }}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
})