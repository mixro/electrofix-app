import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function FaultSolutionScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();

  const faultTitle = typeof params.title === 'string' ? params.title : "Motor fails to start";
  const componentName = typeof params.componentName === 'string' ? params.componentName : "3-Phase Squirrel Cage Induction Motor";

  // Example detailed solution (expand from your DB)
  const solution = {
    symptoms: "No sound or rotation when power is applied.",
    causes: [
      "Blown fuse or tripped breaker",
      "Open circuit in power supply or wiring",
      "Faulty contactor or starting switch",
      "Thermal overload protection activated"
    ],
    steps: [
      "1. Verify power supply voltage at motor terminals",
      "2. Check fuses and circuit breakers",
      "3. Inspect wiring connections for looseness or damage",
      "4. Test contactor operation",
      "5. Allow motor to cool if overload tripped"
    ],
    tools: ["Multimeter", "Screwdriver set", "Insulation tester"],
    safety: "Always disconnect power before working. Use appropriate PPE. Only qualified personnel should perform electrical repairs."
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.faultTitle, { color: theme.text }]}>{faultTitle}</Text>
        </View>

        <Text style={[styles.componentRef, { color: theme.gray_text }]}>For: {componentName}</Text>

        {/* Symptoms */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Symptoms</Text>
          <Text style={[styles.contentText, { color: theme.text }]}>{solution.symptoms}</Text>
        </View>

        {/* Causes */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Possible Causes</Text>
          {solution.causes.map((cause, i) => (
            <Text key={i} style={[styles.bulletText, { color: theme.text }]}>• {cause}</Text>
          ))}
        </View>

        {/* Troubleshooting Steps */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, { color: '#E31E24' }]}>Step-by-Step Troubleshooting</Text>
          {solution.steps.map((step, i) => (
            <Text key={i} style={[styles.contentText, { color: theme.text }]}>{step}</Text>
          ))}
        </View>

        {/* Safety Warning */}
        <View style={[styles.safetyBox, { backgroundColor: '#ffebee' }]}>
          <Text style={styles.safetyTitle}>⚠️ SAFETY WARNING</Text>
          <Text style={styles.safetyText}>{solution.safety}</Text>
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
  faultTitle: { fontSize: 20, fontWeight: '700', flex: 1 },
  componentRef: { paddingHorizontal: 16, marginBottom: 10, fontStyle: 'italic' },
  section: { paddingHorizontal: 16, marginTop: 20 },
  sectionHeader: { fontSize: 18, fontWeight: '800', marginBottom: 10 },
  contentText: { fontSize: 15.5, lineHeight: 23, marginBottom: 8 },
  bulletText: { fontSize: 15.5, lineHeight: 23, marginBottom: 6, paddingLeft: 8 },
  safetyBox: { margin: 16, padding: 16, borderRadius: 12 },
  safetyTitle: { color: '#d32f2f', fontWeight: '700', fontSize: 16, marginBottom: 8 },
  safetyText: { color: '#c62828', lineHeight: 20 },
  bookmarkBtn: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  bookmarkText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});