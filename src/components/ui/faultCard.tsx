import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@/src/context/ThemeContext';

export default function FaultCard({ title, desc }: { title: string; desc: string }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[ styles.faultCard, { backgroundColor: theme.secondary_background, shadowColor: theme.text, borderColor: theme.toast_background }]}
    >
        <Text style={[styles.faultTitle, { color: theme.text }]}>
            {title}
        </Text>
        <Text style={[styles.faultDesc, { color: theme.text }]}>
            {desc}
        </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    listContent: {
    paddingBottom: 40,
  },
  faultCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 2,
    borderWidth: 1,
    // Add subtle shadow for light mode
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  faultTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  faultDesc: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 24, // Matches the bold "COMMON FAULTS" header
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 20,
    textTransform: 'uppercase', // To match the style in image 4
  },
})