import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/src/context/ThemeContext';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

export default function Topbar() {
    const { theme } = useTheme();
    const router = useRouter();
    const navigation = useNavigation();
    const isDrawerOpen = useDrawerStatus() === 'open';

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = () => {
      if (searchQuery.trim().length > 0) {
        // Navigate to Components screen with search query as parameter
        router.push({
          pathname: '/components',
          params: { search: searchQuery.trim() }
        });
        setSearchQuery(''); // Clear the search after navigating
      }
    };

  return (
    <View>
      <View className="flex-row" style={styles.topbar}>
        <Text style={[{ color: theme.text }, styles.logo]}>
          ELECTRO
          <Text style={{color: theme.red_button}}>FiX</Text>
        </Text>
        
        <TouchableOpacity onPress={() => (
          isDrawerOpen
            ? navigation.dispatch(DrawerActions.closeDrawer())
            : navigation.dispatch(DrawerActions.openDrawer())
        )}>
          <Ionicons name="menu" size={30} color={theme.text} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <View style={[styles.searchSection, {borderColor: theme.text}]}>
          <TextInput
            style={[styles.input, {color: theme.text}]}
            placeholder="Search components..."
            placeholderTextColor={theme.gray_text}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearchSubmit}        // Pressing "Search" on keyboard
            returnKeyType="search"
            autoCapitalize="none"
          />
          <TouchableOpacity 
            onPress={handleSearchSubmit}
            style={[styles.iconCircle, {backgroundColor: theme.text}]}
          >
            <Ionicons name="search" size={24} color={theme.background} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    display: "flex"
  },
  logo: {
    fontWeight: '900',
    fontSize: 20,
  },
  container: {
    width: '100%',
    marginVertical: 15,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    height: 50,
    paddingLeft: 20,
    paddingRight: 3,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
  },
  iconCircle: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})