import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ComponentCard from '@/src/components/ui/componentCard';
import { Link, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { categories } from '@/src/data/categories';
import { componentsData } from '@/src/data/components';

const ScreenHeader = ({ searchQuery, setSearchQuery, theme, filteredComponents, categories, handleComponentPress }: any) => {
  return (
    <View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchSection, { borderColor: theme.text }]}>
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="Search components..."
            placeholderTextColor={theme.gray_text}
            value={searchQuery}
            onChangeText={setSearchQuery} // Updates state without unmounting
            autoCapitalize="none"
          />
          <View style={[styles.iconCircle, { backgroundColor: theme.icons }]}>
            <Ionicons name="search" size={24} color={theme.background} />
          </View>
        </View>
      </View>

      {/* Show Search Results */}
      {searchQuery.trim() !== '' && (
        <View style={styles.searchResultsContainer}>
          <Text style={[styles.searchResultsTitle, { color: theme.blue_text }]}>
            Search Results ({filteredComponents.length})
          </Text>
          
          {filteredComponents.length > 0 ? (
            filteredComponents.map((comp: any) => (
              <TouchableOpacity
                key={comp.id}
                style={[styles.searchResultItem, { backgroundColor: theme.cards_background }]}
                onPress={() => handleComponentPress(comp.id, comp.name, comp.category)}
              >
                <Text style={[styles.resultName, { color: theme.text }]}>{comp.name}</Text>
                <Text style={[styles.resultCategory, { color: theme.gray_text }]}>{comp.category}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={[styles.noResults, { color: theme.gray_text }]}>
              No components found for "{searchQuery}"
            </Text>
          )}
        </View>
      )}

      {/* Categories & Featured Title */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Categories</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((cat: any, index: number) => (
            <TouchableOpacity 
              key={index}
              style={[styles.categoryCard, { backgroundColor: theme.cards_background, borderColor: theme.border }]}
            >
              <Link href={`/category/${cat.id}` as any} asChild>
                <Pressable>
                  <MaterialCommunityIcons name={cat.iconName} size={28} color="#E31E24" />
                  <Text style={[styles.categoryTitle, { color: theme.text }]}>{cat.title}</Text>
                </Pressable>
              </Link>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 40 }]}>
          Featured Components
        </Text>
      </View>
    </View>
  );
};


export default function components() {
  const { theme } = useTheme();
  const router = useRouter();
  const { search } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const newQuery = typeof search === 'string' ? search.trim() : '';
    setSearchQuery(newQuery);
  }, [search]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSearchQuery('');
      };
    }, [])
  );

  // Live search results
  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase().trim();

    return componentsData.filter(comp =>
      comp.name.toLowerCase().includes(query) ||
      comp.category.toLowerCase().includes(query) ||
      comp.shortDescription?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleComponentPress = (id: string, name: string, category: string) => {
    router.push({
      pathname: '/component/[id]',
      params: { id, name, category }
    });
  };

  const featuredComponents = componentsData.slice(0, 8).map((comp, index) => ({
    id: comp.id,
    name: comp.name,
    category: comp.category,
    image: require('@/assets/photos/generator.png') || comp.imageUrl, // fallback
  }));

  return (
    <SafeAreaView  edges={['top']}  style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
          data={featuredComponents}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListHeaderComponent={
            <ScreenHeader 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              theme={theme}
              filteredComponents={filteredComponents}
              categories={categories}
              handleComponentPress={handleComponentPress}
            />
          }
          renderItem={({ item }) => 
              <ComponentCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  category={item.category}
                  image={item.image}
                  onPress={() => {
                    router.push({
                      pathname: '/component/[id]',
                      params: { 
                        id: item.id,
                        name: item.name, 
                        category: item.category 
                      }
                    });
                  }}
              />
          }
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
      />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 20,
    paddingBottom: 8,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    height: 52,
    paddingLeft: 18,
    paddingRight: 3,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchResultsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  searchResultsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  searchResultItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  resultCategory: {
    fontSize: 14,
  },
  noResults: {
    textAlign: 'center',
    paddingVertical: 20,
    fontStyle: 'italic',
  },

  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 25,
  },

  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 14,
    borderWidth: 1,
    padding: 10,
  },
  categoryIcon: {
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  categoryDesc: {
    fontSize: 13,
    lineHeight: 18,
  },

  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});