import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import { suppliers } from '@/src/data';
import SupplierCard from '@/src/components/ui/supplierCard';

const ScreenHeader = ({ searchQuery, setSearchQuery, theme, filteredSuppliers }: any) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.mainTitle, { color: theme.text }]}>Electrical Suppliers</Text>
      
      {/* Search Bar Integration */}
      <View style={[styles.searchBar, { backgroundColor: theme.secondary_background, borderColor: theme.text }]}>
        <Ionicons name="search" size={20} color={theme.text} />
        <TextInput 
          placeholder="Search by name or location..." 
          placeholderTextColor={theme.gray_text}
          style={[styles.searchInput, { color: theme.text }]}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color={theme.gray_text} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.statsRow}>
        <Text style={[styles.resultsText, { color: theme.gray_text }]}>
          Showing {filteredSuppliers.length} suppliers in Tanzania
        </Text>
        <Ionicons name="filter" size={20} color={theme.text} />
      </View>
    </View>
  )
}

export default function Suppliers() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Live search filtering
  const filteredSuppliers = useMemo(() => {
    if (!searchQuery.trim()) return suppliers;

    const query = searchQuery.toLowerCase().trim();

    return suppliers.filter(supplier =>
      supplier.name.toLowerCase().includes(query) ||
      supplier.location.toLowerCase().includes(query) ||
      supplier.country.toLowerCase().includes(query) ||
      supplier.products.some(product => 
        product.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);
  
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
        data={filteredSuppliers} // Using the data from your previous step
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            theme={theme}
            filteredSuppliers={filteredSuppliers}
          />
        }
        renderItem={({ item }) => <SupplierCard {...item} />}

        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.gray_text }]}>
              No suppliers found matching "{searchQuery}"
            </Text>
          </View>
        )}
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

  emptyContainer: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});