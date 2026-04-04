import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/src/context/ThemeContext';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

type TechnicianCardProps = {
  technician: {
    id: string;
    name: string;
    profession: string;
    location: string;
    phone: string;
    experienceYears: number;
    specialties: string[];
    availability: string;
    rating?: number;
  };
};

export default function TechnicianCard({ technician }: TechnicianCardProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { 
        backgroundColor: theme.light_bg || '#f8f8f8', 
        borderColor: theme.light_gray
      }]}
      activeOpacity={0.85}
    >
      <Link href={`/technician/${technician.id}` as any} asChild>
        <Pressable>
          <View style={styles.header}>
            <View style={[styles.avatar, {backgroundColor: theme.background}]}>
              <MaterialCommunityIcons name="account-hard-hat" size={40} color="#E31E24" />
            </View>
            
            <View style={styles.info}>
              <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
                {technician.name}
              </Text>
              <Text style={[styles.profession, { color: theme.blue_text }]}>
                {technician.profession}
              </Text>
              <View className='flex-row gap-2 items-center'>
                <Ionicons name="location" size={13} color={theme.blue_text} />
                <Text style={{ color: theme.gray_text, fontSize: 13 }}>{technician.location}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Link>

      <View style={styles.specialties}>
        <Text style={[styles.specialtiesLabel, { color: theme.gray_text }]}>Specialties:</Text>
        <Text style={[styles.specialtiesText, { color: theme.text }]}>
          {technician.specialties.slice(0, 3).join(', ')}
          {technician.specialties.length > 3 && '...'}
        </Text>
      </View>

      <View style={[styles.footer, {borderTopColor: '#ffffff',}]}>
        <Text style={[styles.phone, { color: theme.text }]}>
          📞 {technician.phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 2,
    marginVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
  },
  profession: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  experience: {
    marginBottom: 10,
  },
  experienceText: {
    fontSize: 14,
    fontWeight: '600',
  },
  specialties: {
    marginBottom: 12,
  },
  specialtiesLabel: {
    fontSize: 13,
    marginBottom: 4,
  },
  specialtiesText: {
    fontSize: 14.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  phone: {
    fontSize: 15,
    fontWeight: '600',
  },
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  availabilityText: {
    fontSize: 13,
  },
  rating: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});