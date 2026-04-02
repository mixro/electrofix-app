import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import TechnicianCard from '@/src/components/ui/technicianCard';

const TECH_DATA = [
  {
    id: '1',
    name: 'Eng. Baraka Mlowe',
    role: 'Engineer' as const,
    location: 'Kinondoni, Dar es Salaam',
    specialty: 'Power Systems & Grid Maint.',
    experience: '8 Years',
    avatar: require('@/assets/photos/1.png'),
  },
  {
    id: '2',
    name: 'Said Juma',
    role: 'Technician' as const,
    location: 'Msamvu, Morogoro',
    specialty: 'Motor Rewinding & Repair',
    experience: '12 Years',
    avatar: require('@/assets/photos/1.png'),
  },
  {
    id: '3',
    name: 'Eng. Neema Talu',
    role: 'Engineer' as const,
    location: 'Dodoma City',
    specialty: 'Industrial Automation (PLC)',
    experience: '5 Years',
    avatar: require('@/assets/photos/1.png'),
  },
  {
    id: '4',
    name: 'Eng. Kelvin Massawe',
    role: 'Engineer' as const,
    location: 'Arusha City',
    specialty: 'Renewable Energy & Solar PV',
    experience: '7 Years',
    avatar: require('@/assets/photos/1.png'),
  },
  {
    id: '5',
    name: 'Hamisi Bakari',
    role: 'Technician' as const,
    location: 'Kariakoo, Dar es Salaam',
    specialty: 'Domestic Wiring & Installation',
    experience: '15 Years',
    avatar: require('@/assets/photos/1.png'),
  },
];

export default function Technicians() {
  const { theme } = useTheme();
  
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
        data={TECH_DATA}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={[styles.mainTitle, { color: theme.text }]}>Verified Professionals</Text>
            
            <View style={[styles.searchBar, { backgroundColor: theme.secondary_background, borderColor: theme.gray_text }]}>
              <Ionicons name="search" size={20} color={theme.gray_text} />
              <TextInput 
                placeholder="Search by name, role or skill..." 
                placeholderTextColor={theme.gray_text}
                style={[styles.searchInput, { color: theme.text }]}
              />
            </View>
          </View>
        )}
        renderItem={({ item }) => <TechnicianCard {...item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
  listContent: {
    paddingBottom: 30,
  },
});