import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import SupplierCard from '@/src/components/ui/supplierCard';

export default function Suppliers() {
  const { theme } = useTheme();

  const supplierData = [
    {
      id: '1',
      name: 'GFC ELECTRICAL SUPPLIER',
      location: 'Kinondoni, Dar es Salaam',
      description: 'A Tanzanian company involved in supplying electrical equipment and offering contracting services for energy and engineering projects.',
      avatar: require('@/assets/photos/1.png'), // Replace with your actual paths
    },
    {
      id: '2',
      name: 'JS ElectroMec Ltd',
      location: 'Msamvu, Morogoro',
      description: 'Provides electrical panels, automation systems, and power supply solutions for industrial and commercial applications.',
      avatar: require('@/assets/photos/1.png'),
    },
    {
      id: '3',
      name: 'Sosa Electrical Ltd',
      location: 'Dodoma',
      description: 'Specializes in electrical installation, project management, and engineering services across Tanzania.',
      avatar: require('@/assets/photos/1.png'),
    },
    {
      id: '4',
      name: 'Cacla Engineering Limited',
      location: 'Kariakoo, Dar es Salaam',
      description: 'Supplies engineering equipment and materials, supporting construction and industrial electrical projects.',
      avatar: require('@/assets/photos/1.png'),
    },
    {
      id: '5',
      name: 'Al-Hutaib Electricals & Hardware',
      location: 'Magomeni, Dar es Salaam',
      description: 'A local supplier offering electrical tools, cables, and hardware materials for residential and commercial use.',
      avatar: require('@/assets/photos/1.png'),
    }
  ];
  
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
        data={supplierData} // Using the data from your previous step
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={[styles.mainTitle, { color: theme.text }]}>Components Suppliers</Text>
            
            {/* Search Bar Integration */}
            <View style={[styles.searchBar, { backgroundColor: theme.secondary_background, borderColor: theme.text }]}>
              <Ionicons name="search" size={20} color={theme.text} />
              <TextInput 
                placeholder="Search by city or company..." 
                placeholderTextColor={theme.gray_text}
                style={[styles.searchInput, { color: theme.text }]}
              />
            </View>

            <View style={styles.statsRow}>
              <Text style={[styles.resultsText, { color: theme.gray_text }]}>Showing 5 suppliers in Tanzania</Text>
              <Ionicons name="filter" size={20} color={theme.text} />
            </View>
          </View>
        )}
        renderItem={({ item }) => <SupplierCard {...item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
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
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultsText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 40,
  },
});