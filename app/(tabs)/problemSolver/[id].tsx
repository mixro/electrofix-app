import React, { useMemo } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import FaultCategoryAccordion from '@/src/components/ui/FaultCategoryAccordion';
import { getComponentById, getFaultsByComponentId } from '@/src/data';


export default function ComponentFaultsScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { id, name, category } = useLocalSearchParams();

  // Fetch real component data
  const component = getComponentById(typeof id === 'string' ? id : '');

  const componentName = component?.name || (typeof name === 'string' ? name : "Unknown Component");
  const componentCategory = component?.category || (typeof category === 'string' ? category : "Electrical Component");

  // Fetch faults related to this component
  const componentFaults = useMemo(() => {
    return getFaultsByComponentId(typeof id === 'string' ? id : '');
  }, [id]);

  // Group faults by category for accordion display
  const faultCategories = useMemo(() => {
    const grouped: Record<string, any[]> = {};

    componentFaults.forEach(fault => {
      const cat = fault.category || "Other Issues";
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(fault);
    });

    return Object.entries(grouped).map(([title, faultsList]) => ({
      title,
      faults: faultsList
    }));
  }, [componentFaults]);

  const handleFaultPress = (fault: any) => {
    router.push({
      pathname: '/problemSolver/solution/[faultId]',
      params: { 
        faultId: fault.id,
        title: fault.title,
        componentName: componentName,
        componentId: id,
      }
    });
  };

  // Fallback image (you can improve this later)
  const motorImage = require('@/assets/photos/generator.png');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }} className='px-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Large Component Image */}
        <View style={[styles.imageContainer, {backgroundColor: theme.cards_background}]}>
          <Image 
            source={component?.imageUrl ? { uri: component.imageUrl } : motorImage}
            style={styles.image} 
            resizeMode="contain" 
          />
        </View>

        {/* Component Info */}
        <View style={styles.infoContainer}>
          <Text style={[styles.componentName, { color: theme.text }]}>
            {componentName} 
          </Text>
          <Text style={[styles.componentCategory, { color: '#E31E24' }]}>
            {componentCategory}
          </Text>
        </View>

        {/* Search Bar for Faults */}
        <View style={styles.searchContainer}>
          <View style={[styles.searchSection, { borderColor: theme.text }]}>
            <Ionicons name="search" size={20} color={theme.gray_text} style={{ marginRight: 10 }} />
            <Text style={[styles.searchInput, { color: theme.text }]}>
              Search faults for this component...
            </Text>
          </View>
        </View>

        {/* Fault Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: '#E31E24' }]}>Common Fault Categories</Text>
          
          {faultCategories.length > 0 ? (
            faultCategories.map((cat, index) => (
              <FaultCategoryAccordion
                key={index}
                title={cat.title}
                faults={cat.faults}
                onFaultPress={handleFaultPress}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyText, { color: theme.gray_text }]}>
                No faults available for this component yet.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8
  },
  image: {
    width: '90%',
    height: '100%',
  },
  infoContainer: {
    paddingVertical: 16,
  },
  componentName: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  componentCategory: {
    fontSize: 15,
    fontWeight: '600',
  },
  searchContainer: {
    marginBottom: 20,
},
searchSection: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    height: 52,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  section: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },

   emptyState: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});