import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ComponentCard from '@/src/components/ui/componentCard';
import { Link, useRouter } from 'expo-router';

// Import images (you can replace with remote URLs later via Firebase Storage)
const siemensPLC = require('@/assets/photos/breaker.png'); // add your images
const inverter = require('@/assets/photos/generator.png');
const contactor = require('@/assets/photos/generator.png');
const motor = require('@/assets/photos/generator.png');
const relay = require('@/assets/photos/generator.png');
const generator = require('@/assets/photos/generator.png');

export default function components() {
  const { theme } = useTheme();
  const router = useRouter();

  const categories = [
    {
      title: "Electrical Machines",
      desc: "Explore AC/DC motors, generators, and alternators",
      icon: <MaterialCommunityIcons name="engine" size={28} color="#E31E24" />,
    },
    {
      title: "Power Components",
      desc: "Discover transformers, circuit breakers, switches, and other devices for power",
      icon: <MaterialCommunityIcons name="flash" size={28} color="#E31E24" />,
    },
    {
      title: "Control & Automation",
      desc: "PLCs, VFDs, contactors, relays, and other automation systems",
      icon: <MaterialCommunityIcons name="robot-industrial" size={28} color="#E31E24" />,
    },
    {
      title: "Cables & Accessories",
      desc: "Power cables, control cables, wiring accessories, connectors and etc",
      icon: <MaterialCommunityIcons name="cable-data" size={28} color="#E31E24" />,
    },
    {
      title: "Protection Devices",
      desc: "MCBs, MCCBs, RCCBs, fuses, and relays that safeguard equipments",
      icon: <MaterialCommunityIcons name="shield-check" size={28} color="#E31E24" />,
    },
    {
      title: "Instrumentation",
      desc: "Sensors, transducers, and measuring instruments",
      icon: <MaterialCommunityIcons name="gauge" size={28} color="#E31E24" />,
    },
  ];

  const featured = [
      { id: '1', name: "Siemens PLC", category: "Control & Automation", image: siemensPLC },
      { id: '2', name: "Inverter", category: "Power Component", image: inverter },
      { id: '3', name: "Contactor", category: "Power Component", image: contactor },
      { id: '4', name: "Motor", category: "Electrical Machine", image: motor },
      { id: '5', name: "Relay", category: "Protection Device", image: relay },
      { id: '6', name: "Generator", category: "Electrical Machine", image: generator },
  ];

  return (
    <SafeAreaView  edges={['top']}  style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <FlatList
          data={featured}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListHeaderComponent={() => (
            <View>
              {/* Search Bar */}
              <View style={styles.searchContainer}>
                <View style={[styles.searchSection, { borderColor: theme.text }]}>
                  <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Search componets..."
                    placeholderTextColor={theme.gray_text}
                  />
                  <View style={[styles.iconCircle, { backgroundColor: theme.text }]}>
                    <Ionicons name="search" size={24} color={theme.background} />
                  </View>
                </View>
              </View>

              {/* Categories Section */}
              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Categories</Text>
                
                <View style={styles.categoriesGrid}>
                  {categories.map((cat, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={[styles.categoryCard, { backgroundColor: theme.cards_background || '#f8f8f8', borderColor: theme.border }]}
                      activeOpacity={0.85}
                    >
                      <Link href={`/category/${cat.title}` as any} asChild>
                        <Pressable>
                          <View style={styles.categoryIcon}>{cat.icon}</View>
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
          )}
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