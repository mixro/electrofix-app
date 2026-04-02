import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';

interface SupplierProps {
  name: string;
  location: string;
  description: string;
  avatar: any;
}

export default function SupplierCard({ name, location, description, avatar }: SupplierProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      style={[ styles.card, { 
          backgroundColor: theme.secondary_background,
          borderColor: theme.light_gray
        }
      ]}
    >
      <View style={styles.topRow}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
            {name}
          </Text>
          <View style={[styles.locationBadge, { backgroundColor: theme.background }]}>
            <Ionicons name="location" size={12} color={theme.blue_text} />
            <Text style={[styles.locationText, { color: theme.blue_text }]}>
              {location}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.description, { color: theme.gray_text }]} numberOfLines={2}>
        {description}
      </Text>
      
      <View style={styles.footer}>
        <Text style={[styles.viewProfile, { color: theme.red_button }]}>View Products</Text>
        <Ionicons name="arrow-forward" size={16} color={theme.red_button} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 10,
  },
  viewProfile: {
    fontSize: 14,
    fontWeight: '700',
    marginRight: 4,
  }
});