import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@/src/context/ThemeContext';

export default function FaultCard({id, title, desc }: { id: string,title: string; desc: string }) {
  const { theme } = useTheme();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[ styles.faultCard, { backgroundColor: theme.secondary_background, shadowColor: theme.text, borderColor: theme.toast_background }]}
      >
          <View style={styles.faultTitle}>
              <View style={styles.number}>
                <Text style={{color: "white"}}>{id}</Text>  
              </View> 
              
              <Text style={{color: theme.text}} className='text-xl font-bold'>{title}</Text>
          </View>

          <Text style={[styles.faultDesc, { color: theme.text }]}>
              {desc}
          </Text>
      </TouchableOpacity>

      {(id === '1') && 
        <View className='mb-5'>
          <Text style={{color: theme.green_text}} className='text-center text-xl font-bold'>OR</Text>
        </View>
      }
    </View>
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
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  number: {
    backgroundColor: "green",
    borderRadius: 50,
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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