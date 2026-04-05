import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import your offline data
import { faults, getFaultsByComponentId } from '@/src/data/faults';

export default function FaultSolutionScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();

  const faultId = typeof params.faultId === 'string' ? params.faultId : '';
  const componentName = typeof params.componentName === 'string' ? params.componentName : "Unknown Component";
  const componentId = typeof params.componentId === 'string' ? params.componentId : "Unknown Component";

  // Fetch the specific fault
  const fault = faults.find(f => f.id === faultId);

  // Fallback if fault not found
  if (!fault) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: theme.text, fontSize: 18 }}>Fault information not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} 
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={28} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.faultTitle, { color: theme.text }]} numberOfLines={2}>
            {fault.title}
          </Text>
        </View>

        <Text style={[styles.componentRef, { color: theme.gray_text }]}>
          For: {componentName}
        </Text>

        {/* Symptoms */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Symptoms</Text>
          <Text style={[styles.contentText, { color: theme.text }]}>
            {fault.symptoms}
          </Text>
        </View>

        {/* Possible Causes */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Possible Causes</Text>
          {fault.causes.map((cause, index) => (
            <Text key={index} style={[styles.bulletText, { color: theme.text }]}>
              • {cause}
            </Text>
          ))}
        </View>

        {/* Step-by-Step Troubleshooting */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Step-by-Step Troubleshooting</Text>
          {fault.troubleshootingSteps.map((step, index) => (
            <Text key={index} style={[styles.contentText, { color: theme.text }]}>
              {step}
            </Text>
          ))}
        </View>

        {/* Tools Required */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Tools Required</Text>
          <View style={styles.toolsContainer}>
            {fault.toolsRequired.map((tool, index) => (
              <View key={index} style={styles.toolItem}>
                <MaterialCommunityIcons name="tools" size={18} color={theme.red_button || '#E31E24'} />
                <Text style={[styles.toolText, { color: theme.text }]}>{tool}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Safety Warning - Very Prominent */}
        <View style={[styles.safetyBox, { backgroundColor: '#ffebee', borderColor: '#ef5350' }]}>
          <Text style={styles.safetyTitle}>⚠️ SAFETY WARNING</Text>
          <Text style={styles.safetyText}>{fault.safetyWarnings}</Text>
        </View>

        {/* Preventive Measures */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Preventive Measures</Text>
          {fault.preventiveMeasures.map((measure, index) => (
            <Text key={index} style={[styles.bulletText, { color: theme.text }]}>
              • {measure}
            </Text>
          ))}
        </View>

        {/* Bookmark Button */}
        <TouchableOpacity style={[styles.bookmarkBtn, { backgroundColor: '#E31E24' }]}>
          <MaterialCommunityIcons name="bookmark-outline" size={22} color="#fff" />
          <Text style={styles.bookmarkText}>Bookmark this solution</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: { marginRight: 12 },
  faultTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    flex: 1 
  },
  componentRef: { 
    paddingHorizontal: 16, 
    marginBottom: 10, 
    fontStyle: 'italic' 
  },

  section: { 
    paddingHorizontal: 16, 
    marginTop: 24 
  },
  sectionHeader: { 
    fontSize: 18, 
    fontWeight: '800', 
    marginBottom: 12 
  },
  contentText: { 
    fontSize: 15.5, 
    lineHeight: 23, 
    marginBottom: 8 
  },
  bulletText: { 
    fontSize: 15.5, 
    lineHeight: 23, 
    marginBottom: 8, 
    paddingLeft: 8 
  },

  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  toolText: {
    fontSize: 14.5,
  },

  safetyBox: { 
    margin: 16, 
    padding: 18, 
    borderRadius: 12,
    borderWidth: 1,
  },
  safetyTitle: { 
    color: '#d32f2f', 
    fontWeight: '700', 
    fontSize: 17, 
    marginBottom: 10 
  },
  safetyText: { 
    color: '#c62828', 
    lineHeight: 21 
  },

  bookmarkBtn: {
    marginHorizontal: 16,
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  bookmarkText: { 
    color: '#fff', 
    fontWeight: '600', 
    fontSize: 16 
  },
});