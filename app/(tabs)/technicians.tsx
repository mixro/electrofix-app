import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import TechnicianCard from '@/src/components/ui/technicianCard';
import { technicians } from '@/src/data';

const ScreenHeader = ({ searchQuery, setSearchQuery, theme, filteredTechnicians }: any) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.mainTitle, { color: theme.text }]}>Verified Professionals</Text>
      
      <View style={[styles.searchBar, { backgroundColor: theme.secondary_background, borderColor: theme.gray_text }]}>
        <Ionicons name="search" size={20} color={theme.gray_text} />
        <TextInput 
          placeholder="Search by name, role or skill..." 
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

      <View style={styles.statsRow} className='mt-5'>
        <Text style={[styles.resultsText, { color: theme.gray_text }]}>
          Showing {filteredTechnicians.length} professionals
        </Text>
      </View>
    </View>
  )
}

export default function Technicians() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  
  // Live search filtering
  const filteredTechnicians = useMemo(() => {
    if (!searchQuery.trim()) return technicians;

    const query = searchQuery.toLowerCase().trim();

    return technicians.filter(tech =>
      tech.name.toLowerCase().includes(query) ||
      tech.profession.toLowerCase().includes(query) ||
      tech.location.toLowerCase().includes(query) ||
      tech.specialties.some(skill => 
        skill.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);
  
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
        data={filteredTechnicians}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            theme={theme}
            filteredTechnicians={filteredTechnicians}
          />
        }
        renderItem={({ item }) => <TechnicianCard technician={item} />}
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

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 15,
  },

  listContent: {
    paddingBottom: 30,
  },
});