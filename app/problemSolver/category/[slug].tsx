import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ComponentCard from '@/src/components/ui/componentCard';
import { categories } from '@/src/data/categories';
import { componentsData } from '@/src/data/components';

export default function category() {
    const { theme } = useTheme();
    const router = useRouter();
    const { slug } = useLocalSearchParams<{ slug: string }>();

    // Find the current category details
    const currentCategory = categories.find(cat => cat.slug === slug);

    // Filter components that belong to this category
    const categoryComponents = useMemo(() => {
      if (!slug) return [];
      
      return componentsData.filter(comp => 
        comp.category.toLowerCase() === currentCategory?.title.toLowerCase() ||
        comp.category.toLowerCase().includes(slug.toLowerCase().replace(/-/g, ' '))
      );
    }, [slug, currentCategory]);

    // Fallback description if category not found
    const categoryDescription = currentCategory?.description || 
      "Explore various electrical components in this category.";


  return (
    <SafeAreaView edges={['top']}  style={{ backgroundColor: theme.background, flex: 1,}} className='px-4'>
        <FlatList
            data={categoryComponents}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={() => (
                <View style={styles.headerContainer}>
                    <Text style={[styles.mainTitle, {color: theme.text}]} className='uppercase'>
                        {currentCategory?.title}
                    </Text>

                    <Text style={[styles.introText, {color: theme.text}]}>
                        {categoryDescription}
                    </Text>

                    <Text style={styles.listHeader}>List of components</Text>
                </View>
            )}
            renderItem={({ item }) => 
                <ComponentCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    image={item.imageUrl}
                    onPress={() => {
                      router.push({
                        pathname: '/problemSolver/[id]',
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
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingVertical: 10,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    marginBottom: 15,
    marginTop: 10
  },
  introText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 30,
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C00', // Matches the red in your screenshot
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});