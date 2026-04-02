import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@/src/context/ThemeContext';

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

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }} className='px-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Image Section */}
        <View style={[styles.imageHeader, {backgroundColor: theme.cards_background}]}>
          <Image 
            source={require('@/assets/photos/generator.png')} 
            style={styles.mainImage} 
            resizeMode="contain" 
          />
        </View>

        <View style={styles.contentContainer}>
          {/* Component Identity */}
          <Text style={[styles.componentName, {color: theme.text}]}>3-Phase Squirrel Cage Induction Motor</Text>
          <Text style={[styles.componentCategory, {color: theme.gray_text}]}>Electrical Machine</Text>

          {/* Function */}
          <DetailSection title="Function">
            <Text style={[styles.bodyText, {color: theme.text}]}>
              Converts electrical energy into mechanical rotational energy to drive pumps, fans, 
              compressors, conveyors, machine tools, and other industrial equipment.
            </Text>
          </DetailSection>

          {/* Working Principle */}
          <DetailSection title="Working principle">
            <Text style={[styles.bodyText, {color: theme.text}]}>
              A 3-phase AC supply is given to the stator windings, which produces a rotating magnetic 
              field at synchronous speed. This rotating field cuts the rotor bars, inducing current 
              in the rotor by electromagnetic induction. The induced rotor current creates its own 
              magnetic field, causing the rotor to rotate in the same direction as the magnetic field.
            </Text>
          </DetailSection>

          {/* Ratings Table-like section */}
          <DetailSection title="Ratings (Typical Specifications)">
            <View style={styles.specsContainer}>
              <Text style={styles.specLine}><Text style={styles.bold}>Power Rating:</Text> 0.75 kW – 500 kW</Text>
              <Text style={styles.specLine}><Text style={styles.bold}>Voltage:</Text> 230/400V or 400/690V (3-phase)</Text>
              <Text style={styles.specLine}><Text style={styles.bold}>Speed:</Text> 750, 1000, 1500, or 3000 RPM</Text>
              <Text style={styles.specLine}><Text style={styles.bold}>Enclosure:</Text> IP55 or IP65 (TEFC)</Text>
              <Text style={styles.specLine}><Text style={styles.bold}>Efficiency:</Text> IE2 or IE3 (Premium Efficiency)</Text>
            </View>
          </DetailSection>

          {/* Applications */}
          <DetailSection title="Applications">
            <BulletItem text="Industrial pumps and compressors" />
            <BulletItem text="HVAC fans and blowers" />
            <BulletItem text="Conveyor belts and material handling" />
            <BulletItem text="Machine tools and lathes" />
          </DetailSection>

          {/* Faults */}
          <DetailSection title="Faults">
            <BulletItem text="Overheating (due to overload or blocked ventilation)" />
            <BulletItem text="Bearing failure (noise, vibration, seizure)" />
            <BulletItem text="Stator winding short circuit or burnout" />
          </DetailSection>

          {/* Maintenance Tips */}
          <DetailSection title="Maintenance Tips">
            <BulletItem text="Check and clean cooling fins regularly" />
            <BulletItem text="Lubricate bearings at recommended intervals" />
            <BulletItem text="Measure vibration and temperature during operation" />
            <BulletItem text="Keep the motor clean and dry" />
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
    width: '80%',
    height: '80%',
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