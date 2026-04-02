import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';

type Fault = {
  id: string;
  title: string;
  symptoms: string;
};

type FaultCategoryAccordionProps = {
  title: string;
  faults: Fault[];
  onFaultPress: (fault: Fault) => void;
};

export default function FaultCategoryAccordion({ title, faults, onFaultPress }: FaultCategoryAccordionProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.container, { borderColor: theme.border }]}>
      <TouchableOpacity 
        style={[styles.header, { backgroundColor: theme.cards_background || '#f8f8f8' }]}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={[styles.headerTitle, { color: theme.text }]}>{title}</Text>
        <MaterialCommunityIcons 
          name={expanded ? "chevron-up" : "chevron-down"} 
          size={24} 
          color={theme.text} 
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          {faults.map((fault) => (
            <TouchableOpacity 
              key={fault.id}
              style={[styles.faultItem, { borderBottomColor: theme.border }]}
              onPress={() => onFaultPress(fault)}
            >
              <Text style={[styles.faultTitle, { color: theme.text }]}>{fault.title}</Text>
              <Text style={[styles.faultSymptoms, { color: theme.gray_text }]} numberOfLines={2}>
                {fault.symptoms}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  faultItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  faultTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  faultSymptoms: {
    fontSize: 13.5,
    lineHeight: 19,
  },
});