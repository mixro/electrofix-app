import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import FaultCategoryAccordion from '@/src/components/ui/FaultCategoryAccordion';

const motorImage = require('@/assets/photos/generator.png'); // Replace with real image

export default function ComponentFaultsScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { componentId, name, category } = useLocalSearchParams();

  const componentName = typeof name === 'string' ? name : "3-Phase Squirrel Cage Induction Motor";
  const componentCategory = typeof category === 'string' ? category : "Electrical Machine";

  // Example fault data (expand this from your database later)
  const faultCategories = [
    {
      title: "Starting & Running Problems",
      faults: [
        { id: "1", title: "Motor fails to start (no hum)", symptoms: "No sound or rotation when power is applied." },
        { id: "2", title: "Motor hums but does not rotate", symptoms: "Humming sound present but rotor does not turn." },
        { id: "3", title: "Motor starts slowly or takes too long to accelerate", symptoms: "Slow acceleration under load." },
        { id: "4", title: "Motor runs in reverse direction", symptoms: "Rotation opposite to expected direction." },
        { id: "5", title: "Motor loses speed under load", symptoms: "Speed drops significantly when loaded." },
      ]
    },
    {
      title: "Overheating & Thermal Issues",
      faults: [
        { id: "6", title: "Motor overheats excessively", symptoms: "High temperature during normal operation." },
        // Add more...
      ]
    },
    {
      title: "Electrical & Winding Faults",
      faults: [ /* ... */ ]
    },
    {
      title: "Mechanical & Vibration Issues",
      faults: [ /* ... */ ]
    },
    {
      title: "Protection & Tripping Problems",
      faults: [ /* ... */ ]
    },
    {
      title: "Noise & Abnormal Operation",
      faults: [ /* ... */ ]
    },
  ];

  const handleFaultPress = (fault: any) => {
    router.push({
      pathname: '/problemSolver/solution/[id]',
      params: { 
        id: fault.id,
        title: fault.title,
        componentName: componentName,
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }} className='px-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Large Component Image */}
        <View style={[styles.imageContainer, {backgroundColor: theme.cards_background}]}>
          <Image 
            source={motorImage} 
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
              Search faults for this motor...
            </Text>
          </View>
        </View>

        {/* Fault Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: '#E31E24' }]}>Common Fault Categories</Text>
          
          {faultCategories.map((cat, index) => (
            <FaultCategoryAccordion
              key={index}
              title={cat.title}
              faults={cat.faults}
              onFaultPress={handleFaultPress}
            />
          ))}
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
});