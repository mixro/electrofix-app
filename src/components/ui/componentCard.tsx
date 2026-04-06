import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/src/context/ThemeContext';

type ComponentCardProps = {
    id: string;
    name: string;
    category: string;
    image: any;    
    onPress?: () => void;
};

export default function ComponentCard({ id, name, category, image, onPress }: ComponentCardProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.card, { backgroundColor: theme.cards_background || theme.background, borderColor: theme.border, shadowColor: theme.text }]}
    >
      <View style={styles.imageContainer}>
          <Image 
              source={{ uri: image}} 
              style={styles.image}
              resizeMode="contain"
          />
      </View>
      <View style={[styles.info, {backgroundColor: theme.background, borderTopColor: theme.toast_background}]}>
          <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
              {name}
          </Text>
          <Text style={[styles.category, { color: theme.gray_text }]}>
              {category}
          </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height: 140,
    maxHeight: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  info: {
    padding: 12,
    borderTopWidth: 0.5,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
  },
});