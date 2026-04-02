import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        
        {/* App Branding Section */}
        <View style={[styles.headerCard, { backgroundColor: theme.light_bg }]}>
          <Image 
            source={require('@/assets/photos/logo.jpeg')} // Replace with your actual logo path
            style={styles.logo} 
          />
          <View style={styles.brandTextContainer}>
            <Text style={[styles.brandName, { color: theme.text }]}>
              ELECTRO<Text style={{ color: theme.red_button }}>FIX</Text>
            </Text>
            <Text style={[styles.handle, { color: theme.gray_text }]}>@Karebu_Electronics</Text>
          </View>
        </View>

        {/* Version Info Section */}
        <View style={[styles.sectionCard, { backgroundColor: theme.light_bg }]}>
          <InfoRow icon="information-circle-outline" label="Version" value="4.2" />
          <View style={[styles.divider, { backgroundColor: theme.border }]} />
          <InfoRow icon="sync-outline" label="Changelog" value="View updates" isLink />
          <View style={[styles.divider, { backgroundColor: theme.border }]} />
          <InfoRow icon="document-text-outline" label="License" value="MIT License" isLink />
        </View>

        {/* App Description Section */}
        <View style={styles.contentSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>App Description</Text>
          <Text style={[styles.descriptionText, { color: theme.gray_text }]}>
            ELECTROFIX is a powerful mobile app designed for electrical engineering students, 
            technicians, electricians, and industrial professionals.
            {"\n\n"}
            Quickly identify electrical components, diagnose faults with step-by-step 
            troubleshooting guides, find trusted suppliers, and learn essential electrical 
            theory — all in one place.
            {"\n\n"}
            With clear safety warnings, detailed component information, and practical solutions, 
            ELECTROFIX helps you work smarter, safer, and more efficiently.
          </Text>
          <Text style={[styles.footerTagline, { color: theme.blue_text }]}>
            Your everyday electrical problem solver.
          </Text>
        </View>

        {/* Company Card */}
        <Text style={[styles.sectionTitle, { color: theme.text, marginLeft: 16 }]}>Company</Text>
        <View style={[styles.companyCard, { backgroundColor: theme.light_bg }]}>
          <View style={styles.companyHeader}>
            <MaterialCommunityIcons name="office-building" size={30} color={theme.red_button} />
            <View style={{ marginLeft: 12 }}>
              <Text style={[styles.companyName, { color: theme.text }]}>Karebu Electronics Ltd</Text>
              <Text style={[styles.companySub, { color: theme.gray_text }]}>Electronics & Electrical Supplier</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.locationRow}
            onPress={() => Linking.openURL('https://maps.google.com/?q=3265+Plot+Msasani+Dar+es+Salaam')}
          >
            <Ionicons name="location" size={20} color={theme.red_button} />
            <Text style={[styles.locationText, { color: theme.gray_text }]}>
              3265 Plot Msasani{"\n"}Dar es Salaam, Tanzania
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// Helper component for info rows
const InfoRow = ({ icon, label, value, isLink }: any) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity disabled={!isLink} style={styles.infoRow}>
      <View style={styles.infoLeft}>
        <Ionicons name={icon} size={22} color={theme.text} />
        <Text style={[styles.infoLabel, { color: theme.text }]}>{label}</Text>
      </View>
      <View style={styles.infoRight}>
        <Text style={[styles.infoValue, { color: isLink ? theme.blue_text : theme.gray_text }]}>{value}</Text>
        {isLink && <Ionicons name="chevron-forward" size={16} color={theme.blue_text} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  headerCard: {
    margin: 16,
    padding: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  brandTextContainer: {
    marginLeft: 16,
  },
  brandName: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  handle: {
    fontSize: 14,
    marginTop: 2,
  },
  sectionCard: {
    marginHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 8,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  infoRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 14,
    marginRight: 4,
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
    opacity: 0.1,
  },
  contentSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  footerTagline: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 15,
  },
  companyCard: {
    margin: 16,
    padding: 20,
    borderRadius: 24,
  },
  companyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 17,
    fontWeight: '800',
  },
  companySub: {
    fontSize: 13,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  locationText: {
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 20,
  },
});