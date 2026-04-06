import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@/src/context/ThemeContext';
import { componentsData } from '@/src/data/components';
import { useLocalSearchParams } from 'expo-router';

const getComponentById = (id: string) => {
  return componentsData.find(component => component.id === id);
};

const DetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useTheme(); // Access theme here
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: theme.red_button}]}>{title}</Text>
      {children}
    </View>
  );
};

const BulletItem = ({ text }: { text: string }) => {
  const { theme } = useTheme(); // Access theme here
  return (
    <View style={styles.bulletRow}>
      <Text style={[styles.bullet, { color: theme.red_button}]}>•</Text>
      <Text style={[styles.bulletText, { color: theme.text }]}>{text}</Text>
    </View>
  );
};

export default function ComponentDetailScreen() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Fetch the component data dynamically
  const component = getComponentById(id || '');

  // Fallback if component not found
  if (!component) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: theme.text, fontSize: 18 }}>Component not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Image Section */}
        <View style={[styles.imageHeader]}>
          <Image 
            source={{ uri: component.imageUrl }}
            style={[styles.mainImage, { borderColor: theme.light_gray }]} 
            resizeMode="contain" 
          />
        </View>

        <View style={styles.contentContainer}>
          {/* Component Identity */}
          <Text style={[styles.componentName, {color: theme.text}]}>{component.name}</Text>
          <Text style={[styles.componentCategory, {color: theme.gray_text}]}>{component.category}</Text>

          {/* Function */}
          <DetailSection title="Function">
            <Text style={[styles.bodyText, {color: theme.text}]}>
              {component.function}
            </Text>
          </DetailSection>

          {/* Working Principle */}
          <DetailSection title="Working principle">
            <Text style={[styles.bodyText, {color: theme.text}]}>
              {component.workingPrinciple}
            </Text>
          </DetailSection>

          {/* Ratings Table-like section */}
          <DetailSection title="Ratings (Typical Specifications)">
            <View style={styles.specsContainer}>
              {Object.entries(component.ratings).map(([key, value]) => (
                <Text key={key} style={styles.specLine}>
                  <Text style={styles.bold}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text> {value}
                </Text>
              ))}
            </View>
          </DetailSection>

          {/* Applications */}
          <DetailSection title="Applications">
            {component.applications.map((app, index) => (
              <BulletItem key={index} text={app} />
            ))}
          </DetailSection>

          {/* Faults */}
          <DetailSection title="Faults">
            {component.advantages.map((adv, index) => (
              <BulletItem key={index} text={adv} />
            ))}
          </DetailSection>

          {/* Maintenance Tips */}
          <DetailSection title="Maintenance Tips">
            {component.limitations.map((lim, index) => (
              <BulletItem key={index} text={lim} />
            ))}
          </DetailSection>   

          {/* Safety Precautions */}
          <DetailSection title="Safety Precautions">
            {component.safetyPrecautions.map((precaution, index) => (
              <BulletItem key={index} text={precaution} />
            ))}
          </DetailSection>       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 12
  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 8,
  },
  contentContainer: {
    paddingTop: 20,
  },
  componentName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  componentCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  specsContainer: {
    backgroundColor: '#FAFADA', // Subtle tint for spec box
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#D00',
  },
  specLine: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingRight: 10,
  },
  bullet: {
    fontSize: 18,
    color: '#D00',
    marginRight: 8,
    lineHeight: 22,
  },
  bulletText: {
    fontSize: 15,
    color: '#333',
    flex: 1,
    lineHeight: 22,
  },
});