import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";
import Sidebar from '@/src/components/navigation/sidebar';
import { StyleSheet, Switch, Text, View } from 'react-native';
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
      <View className="flex-row items-center p-4 pb-8" style={{ borderBottomWidth: 1, borderBottomColor: theme.border }}>
        <Text style={[{ color: theme.text }, styles.logo]}>ELECTRO</Text>
        <Text style={[{color: theme.logo_text}, styles.logo]}>FiX</Text>
      </View>

      <DrawerContentScrollView style={{position: "relative"}}>
        <Sidebar />

        <View className="py-4 pr-0 flex-row justify-between items-center" style={{ borderTopWidth: 1, borderTopColor: theme.border }}>
          <Text style={{ color: theme.icons }} className="text-lg font-bold">{isDarkMode ? "Light mode" : "Dark Mode"}</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#fdc200ff' }} 
            thumbColor={isDarkMode ? '#FFFFFF' : '#F4F3F4'}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: '800',
    fontSize: 25,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
})