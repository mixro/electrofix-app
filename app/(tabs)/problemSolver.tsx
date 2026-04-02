import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import { Link } from 'expo-router';
import FaultCard from '@/src/components/ui/faultCard';


export default function problemSolver() {
  const { theme } = useTheme();

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

  const commonFaults = [
    {
      id: '1',
      title: 'Overheating & Thermal Issues',
      desc: 'Excessive temperature rise in equipment caused by overloading, poor ventilation, or cooling failure, which can damage insulation and reduce lifespan.',
    },
    {
      id: '2',
      title: 'Starting & Running Problems',
      desc: 'Difficulties in starting or maintaining normal operation, often due to low voltage, faulty capacitors, or mechanical load issues.',
    },
    {
      id: '3',
      title: 'Mechanical & Vibration Issues',
      desc: 'Physical faults like misalignment, worn bearings, or imbalance that cause vibration, noise, and possible mechanical damage.',
    },
    {
      id: '4',
      title: 'Protection & Tripping Problems',
      desc: 'Frequent or unexpected shutdowns triggered by protective devices due to overloads, faults, or incorrect settings.',
    },
  ];
  
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, minHeight: "100%" }} className='px-4'>
      <FlatList
          data={commonFaults}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <Text style={{ color: theme.text, marginVertical: 10 }} className='text-2xl font-black'>
                FIXING FAULTS
              </Text>

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
                <Text style={[styles.sectionTitle, { color: theme.red_button }]}>Categories</Text>
                
                <View style={styles.categoriesGrid}>
                  {categories.map((cat, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={[styles.categoryCard, { backgroundColor: theme.cards_background || '#f8f8f8', borderColor: theme.border }]}
                      activeOpacity={0.85}
                    >
                      <Link href={`/problemSolver/category/${cat.title}` as any} asChild>
                        <Pressable>
                          <View style={styles.categoryIcon}>{cat.icon}</View>
                          <Text style={[styles.categoryTitle, { color: theme.text }]}>{cat.title}</Text>
                        </Pressable>
                      </Link>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={[styles.sectionTitle, { color: theme.red_button, marginTop: 40 }]}>
                  Common Faults
                </Text>
              </View>
            </View>
          )}
          renderItem={({ item }) => 
              <FaultCard
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
              />
          }
          contentContainerStyle={styles.listContent}
      />      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 12,
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
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 0,
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