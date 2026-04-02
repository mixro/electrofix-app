import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';

export default function TechnicianDetailScreen() {
  const { theme } = useTheme();

  // Professional color for verification badges
  const verifiedColor = theme.green_text || '#2E7D32';

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* Profile Header Card */}
        <View style={[styles.profileCard, { backgroundColor: theme.secondary_background }]}>
            <View className='p-1.5 rounded-full border-2' style={{borderColor: theme.gray_text, marginBottom: 25}}>
                <Image 
                    source={require('@/assets/photos/1.png')} 
                    style={[styles.avatar]} 
                />
            </View>
            
          <View style={styles.nameSection}>
            <View style={styles.row}>
              <Text style={[styles.name, { color: theme.text }]}>Eng. Baraka Mlowe</Text>
              <Ionicons name="checkmark-circle" size={20} color={verifiedColor} />
            </View>
            <Text style={[styles.role, { color: theme.blue_text }]}>Electrical Engineer</Text>
          </View>
          
          <View style={styles.statsRow}>
            <StatItem label="Experience" value="8 Yrs" />
            <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
            <StatItem label="Projects" value="120+" />
            <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
            <StatItem label="Rating" value="4.9/5" />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity 
            style={[styles.primaryBtn, { backgroundColor: theme.blue_text }]}
            onPress={() => Linking.openURL('tel:+25534895084589')}
          >
            <Ionicons name="call" size={18} color={theme.background} />
            <Text style={[styles.btnText, {color: theme.background}]}>Call Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.secondaryBtn, { borderColor: theme.green_text }]}
            onPress={() => Linking.openURL('whatsapp://send?phone=+25534895084589')}
          >
            <FontAwesome5 name="whatsapp" size={18} color={theme.green_text} />
            <Text style={[styles.secondaryBtnText, { color: theme.green_text }]}>WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Professional Summary</Text>
          <Text style={[styles.bioText, { color: theme.gray_text }]}>
            Specialized in high-voltage industrial installations and grid maintenance. 
            Registered with the Engineers Registration Board (ERB) Tanzania. Expert in 
            diagnosing complex machinery faults and energy efficiency audits.
          </Text>
        </View>

        {/* Skills Tags */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Core Specialties</Text>
          <View style={styles.tagContainer}>
            {['Power Systems', 'PLC Programming', 'HVAC Control', 'Industrial Safety', 'Solar PV'].map((skill) => (
              <View key={skill} style={[styles.tag, { backgroundColor: theme.cards_background || '#eee' }]}>
                <Text style={[styles.tagText, { color: theme.text }]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Location Info */}
        <View style={[styles.locationCard, { backgroundColor: theme.secondary_background }]}>
          <Ionicons name="location" size={24} color={theme.red_button} />
          <View style={{ marginLeft: 12 }}>
            <Text style={[styles.locationTitle, { color: theme.text }]}>Service Area</Text>
            <Text style={[styles.locationSub, { color: theme.gray_text }]}>Kinondoni, Dar es Salaam & Nearby Regions</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-components
const StatItem = ({ label, value }: { label: string, value: string }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.statItem}>
      <Text style={[styles.statValue, { color: theme.text }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: theme.gray_text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { paddingBottom: 40 },
  profileCard: {
    margin: 16,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameSection: { alignItems: 'center', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  name: { fontSize: 22, fontWeight: '900' },
  role: { fontSize: 16, fontWeight: '700', marginTop: 2 },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  statItem: { alignItems: 'center', flex: 1 },
  statValue: { fontSize: 18, fontWeight: '800' },
  statLabel: { fontSize: 12, marginTop: 2 },
  statDivider: { width: 1, height: '70%', alignSelf: 'center' },
  
  actionRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 12, marginBottom: 24 },
  primaryBtn: { 
    flex: 1.2, 
    flexDirection: 'row', 
    height: 54, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8 
  },
  secondaryBtn: { 
    flex: 1, 
    flexDirection: 'row', 
    height: 54, 
    borderRadius: 16, 
    borderWidth: 2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8 
  },
  btnText: { fontSize: 16, fontWeight: '700' },
  secondaryBtnText: { fontSize: 16, fontWeight: '700' },

  section: { paddingHorizontal: 20, marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '800', marginBottom: 10 },
  bioText: { fontSize: 15, lineHeight: 24, textAlign: 'justify' },
  
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12 },
  tagText: { fontSize: 13, fontWeight: '600' },

  locationCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTitle: { fontSize: 16, fontWeight: '700' },
  locationSub: { fontSize: 13, marginTop: 2 },
});