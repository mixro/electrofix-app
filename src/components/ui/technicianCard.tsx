import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import { Link } from 'expo-router';

interface TechProps {
  name: string;
  role: 'Engineer' | 'Technician';
  location: string;
  specialty: string;
  experience: string;
  avatar: any;
}

export default function TechnicianCard({ name, role, location, specialty, experience, avatar }: TechProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      style={[styles.card, { backgroundColor: theme.secondary_background, borderColor: theme.light_gray }]}
    >
        <Link href={`/technician/${name}` as any} asChild>
            <Pressable>
                <View style={styles.mainRow}>
                    <Image source={avatar} style={styles.avatar} />
                    
                    <View style={styles.infoContainer}>
                        <View style={styles.titleRow}>
                            <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>{name}</Text>
                        </View>

                        <View style={styles.metaRow}>
                            <MaterialCommunityIcons name="briefcase-outline" size={14} color={theme.gray_text} />
                            <Text style={[styles.metaText, { color: theme.gray_text }]}>{specialty}</Text>
                        </View>

                        <View style={styles.metaRow}>
                            <Ionicons name="location-outline" size={14} color={theme.blue_text} />
                            <Text style={[styles.location, { color: theme.blue_text }]}>{location}</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.footer, { borderTopColor: theme.border }]}>
                    <Text style={[styles.expText, { color: theme.gray_text }]}>
                        <Text style={{ fontWeight: '800', color: theme.text }}>{experience}</Text> Experience
                    </Text>

                    <View style={[styles.roleBadge, { backgroundColor: role === 'Engineer' ? theme.blue_text : theme.green_button }]}>
                        <Text style={styles.roleText}>{role}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: '800',
    flex: 1,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginLeft: 8,
  },
  roleText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  metaText: {
    fontSize: 13,
    marginLeft: 5,
  },
  location: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
  },
  expText: {
    fontSize: 12,
  },
  contactBtn: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 8,
  },
  contactBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});