import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/src/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ComponentCard from '@/src/components/ui/componentCard';

export default function category() {
    const { theme } = useTheme();
    const { id } = useLocalSearchParams<{ id: string }>();

    const siemensPLC = require('@/assets/photos/breaker.png'); // add your images
    const inverter = require('@/assets/photos/generator.png');
    const contactor = require('@/assets/photos/generator.png');
    const motor = require('@/assets/photos/generator.png');
    const relay = require('@/assets/photos/generator.png');
    const generator = require('@/assets/photos/generator.png');

    const featured = [
        { id: '1', name: "Siemens PLC", category: "Control & Automation", image: siemensPLC },
        { id: '2', name: "Inverter", category: "Power Component", image: inverter },
        { id: '3', name: "Contactor", category: "Power Component", image: contactor },
        { id: '4', name: "Motor", category: "Electrical Machine", image: motor },
        { id: '5', name: "Relay", category: "Protection Device", image: relay },
        { id: '6', name: "Generator", category: "Electrical Machine", image: generator },
    ];

  return (
    <SafeAreaView edges={['top']}  style={{ backgroundColor: theme.background, flex: 1,}} className='px-4'>
        <FlatList
            data={featured}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={() => (
                <View style={styles.headerContainer}>
                    <Text style={[styles.mainTitle, {color: theme.text}]} className='uppercase'>
                        {id}
                    </Text>

                    <Text style={[styles.introText, {color: theme.text}]}>
                        Include transformers, DC machines (DC motors and generators), synchronous machines (alternators and synchronous motors), induction machines (single-phase and three-phase motors), as well as special machines such as stepper motors, servo motors, universal motors, reluctance motors, and linear machines
                    </Text>

                    <Text style={styles.listHeader}>List of components</Text>
                </View>
            )}
            renderItem={({ item }) => 
                <ComponentCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    image={item.image}
                />
            }
            contentContainerStyle={styles.listContent}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingVertical: 10,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    marginBottom: 15,
    marginTop: 10
  },
  introText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 30,
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C00', // Matches the red in your screenshot
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});