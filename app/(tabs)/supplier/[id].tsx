import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import ComponentCard from '@/src/components/ui/componentCard';
import { useLocalSearchParams } from 'expo-router';

// Import images (you can replace with remote URLs later via Firebase Storage)
const siemensPLC = require('@/assets/photos/breaker.png'); // add your images
const inverter = require('@/assets/photos/generator.png');
const contactor = require('@/assets/photos/generator.png');
const motor = require('@/assets/photos/generator.png');
const relay = require('@/assets/photos/generator.png');
const generator = require('@/assets/photos/generator.png');

const SUPPLIER_PRODUCTS = [
    { id: '1', name: "Siemens PLC", category: "Control & Automation", image: siemensPLC },
    { id: '2', name: "Inverter", category: "Power Component", image: inverter },
    { id: '3', name: "Contactor", category: "Power Component", image: contactor },
    { id: '4', name: "Motor", category: "Electrical Machine", image: motor },
    { id: '5', name: "Relay", category: "Protection Device", image: relay },
    { id: '6', name: "Generator", category: "Electrical Machine", image: generator },
];

// Helper Components
const DetailRow = ({ label, value }: { label: string; value: string }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.detailRow}>
      <Text style={[styles.label, { color: theme.text }]}>{label}: </Text>
      <Text style={[styles.value, { color: theme.gray_text}]}>{value}</Text>
    </View>
  );
};

const SocialIcon = ({ name, color }: { name: string; color: string }) => (
  <TouchableOpacity style={styles.socialBtn}>
    <FontAwesome5 name={name} size={32} color={color} />
  </TouchableOpacity>
);

export default function SupplierDetailScreen() {
    const { theme } = useTheme();
    const { id } = useLocalSearchParams<{ id: string }>();

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            {/* Profile Header */}
            <View style={styles.profileSection}>
                <View className='p-1.5 rounded-full border-2' style={{borderColor: theme.gray_text, marginBottom: 25}}>
                    <Image 
                        source={require('@/assets/photos/1.png')} 
                        style={[styles.avatar]} 
                    />
                </View>
                <Text style={[styles.supplierName, { color: theme.text }]} className='uppercase'>
                    {id}
                </Text>
                
                <View style={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map((s) => (
                    <Ionicons key={s} name="star" size={18} color="#e4c202" />
                ))}
                </View>
                
                <Text style={[styles.bio, { color: theme.gray_text }]}>
                A Tanzanian company involved in supplying electrical equipment and offering 
                contracting services for energy and engineering projects.
                </Text>
            </View>

            {/* Details & Contacts Card */}
            <View style={[styles.infoCard, { backgroundColor: theme.inputs_bg }]}>
                <Text style={[styles.cardTitle, { color: theme.blue_text }]}>Details</Text>
                <DetailRow label="Available" value="08:00 – 19:00" />
                <DetailRow label="Address" value="P.O Box 234 Dar es Salaam" />
                <DetailRow label="Location" value="Kinondoni, Dar es Salaam" />

                <View style={[styles.divider, { backgroundColor: theme.border }]} />

                <Text style={[styles.cardTitle, { color: theme.blue_text }]}>Contacts</Text>
                <DetailRow label="Phone" value="+25534895084589" />
                <DetailRow label="Email" value="gfcelectrical@gmail.com" />
                <DetailRow label="Website" value="www.gfcelectrical.com" />
            </View>

            {/* Social Media Section */}
            <Text style={[styles.cardTitle, { color: theme.blue_text, paddingLeft: 10 }]}>Social media</Text>
            <View style={styles.socialRow}>
                <SocialIcon name="whatsapp" color="#25D366" />
                <SocialIcon name="facebook" color="#1877F2" />
                <SocialIcon name="instagram" color="#E4405F" />
                <SocialIcon name="linkedin" color="#0A66C2" />
            </View>

            <Text style={[styles.sectionHeader, { color: theme.text, marginBottom: 25 }]}>Available Products</Text>
        </View>
    );

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }}>
      <FlatList
        data={SUPPLIER_PRODUCTS}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <ComponentCard
                id={item.id}
                name={item.name}
                category={item.category}
                image={item.image}
            />
        )}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  supplierName: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  ratingRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  bio: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 14,
    marginTop: 5,
  },
  infoCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
  },
  value: {
    fontSize: 15,
    flex: 1,
  },
  divider: {
    height: 1,
    marginVertical: 15,
    opacity: 0.3,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialBtn: {
    padding: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
  },
  listPadding: {
    paddingBottom: 0,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 15,
  },
});