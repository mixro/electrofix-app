import { Tabs } from 'expo-router';
import React from 'react';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import { Text } from 'react-native';

export default function TabLayout() {
  const { theme } = useTheme();

  const tabOptions = {
    tabBarActiveTintColor: theme.tabActiveTint,
    tabBarInactiveTintColor: theme.tabInactiveTint,
    tabBarStyle: { backgroundColor: theme.tabBackground, borderTopWidth: 1, borderTopColor: theme.border },
    headerShown: false,
  };

  return (
    <Tabs screenOptions={tabOptions}>
      <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={20} />,
            tabBarLabel: ({ focused }) => (
              <Text
                className={focused ? 'font-bold' : ''}
                style={{ color: focused ? theme.tabActiveTint : theme.tabInactiveTint, fontSize: 12 }}
              >
                Home
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="components"
          options={{
            title: 'News',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="generator-portable" color={color} size={20} />,
            tabBarLabel: ({ focused }) => (
              <Text
                className={focused ? 'font-bold' : ''}
                style={{ color: focused ? theme.tabActiveTint : theme.tabInactiveTint, fontSize: 12 }}
              >
                Components
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="problemSolver"
          options={{
            title: 'Fault Fixing',
            tabBarIcon: ({ color }) => <Entypo name="tools" color={color} size={20} />,
            tabBarLabel: ({ focused }) => (
              <Text
                className={focused ? 'font-bold' : ''}
                style={{ color: focused ? theme.tabActiveTint : theme.tabInactiveTint, fontSize: 12 }}
              >
                Faults Fixing
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="suppliers"
          options={{
            title: 'Suppliers',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="truck-delivery" size={20} color={color} />,
            tabBarLabel: ({ focused }) => (
              <Text
                className={focused ? 'font-bold' : ''}
                style={{ color: focused ? theme.tabActiveTint : theme.tabInactiveTint, fontSize: 12 }}
              >
                Suppliers
              </Text>
            ),
          }}
        />
        
        <Tabs.Screen
          name="category/[id]"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="component/[id]"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="supplier/[id]"
          options={{
            href: null,
            headerShown: false,
          }}
        />
    </Tabs>
  );
}
