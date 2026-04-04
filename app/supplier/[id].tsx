import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';
import ComponentCard from '@/src/components/ui/componentCard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { suppliers } from '@/src/data/suppliers';
import { componentsData } from '@/src/data';

// Helper Components
const DetailRow = ({ label, value }: { label: string; value: any }) => {
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
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();

    const supplier = suppliers.find(s => s.id === id);
    
    if (!supplier) {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: theme.text, fontSize: 18 }}>Supplier not found</Text>
        </SafeAreaView>
      );
    }

    // Filter components that match this supplier's products (by name)
    const supplierProducts = componentsData.filter(comp =>
      supplier.products.some(supProduct =>
        comp.name.toLowerCase().includes(supProduct.toLowerCase()) ||
        supProduct.toLowerCase().includes(comp.name.toLowerCase())
      )
    );

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
                    {supplier.name}
                </Text>
                
                <View style={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map((s) => (
                    <Ionicons key={s} name="star" size={18} color="#e4c202" />
                ))}
                </View>
                
                <Text style={[styles.bio, { color: theme.gray_text }]}>
                  {supplier.description}
                </Text>
            </View>

            {/* Details & Contacts Card */}
            <View style={[styles.infoCard, { backgroundColor: theme.light_bg }]}>
                <Text style={[styles.cardTitle, { color: theme.blue_text }]}>Details</Text>
                <DetailRow label="Available" value="08:00 – 19:00" />
                <DetailRow label="Address" value={supplier.address} />
                <DetailRow label="Location" value={supplier.location} />

                <View style={[styles.divider, { backgroundColor: theme.gray_text }]} />

                <Text style={[styles.cardTitle, { color: theme.blue_text }]}>Contacts</Text>
                <DetailRow label="Phone" value={supplier.phone} />
                {supplier.email && <DetailRow label="Email" value={supplier.email} />}
                {supplier.website && <DetailRow label="Website" value={supplier.website} />}
            </View>

            {/* Social Media Section */}
            <Text style={[styles.cardTitle, { color: theme.blue_text, paddingLeft: 10 }]}>Social media</Text>
            <View style={styles.socialRow}>
                <SocialIcon name="whatsapp" color="#25D366" />
                <SocialIcon name="facebook" color="#1877F2" />
                <SocialIcon name="instagram" color="#E4405F" />
                <SocialIcon name="linkedin" color="#0A66C2" />
            </View>

            <Text style={[styles.sectionHeader, { color: theme.text, marginBottom: 25 }]}>
              Available Products ({supplierProducts.length})
            </Text>
        </View>
    );

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, flex: 1 }}>
      <FlatList
        data={supplierProducts}
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
                image={item.imageUrl}
                onPress={() => {
                  router.push({
                    pathname: '/component/[id]',
                    params: { 
                      id: item.id,
                      name: item.name, 
                      category: item.category 
                    }
                  });
                }}
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