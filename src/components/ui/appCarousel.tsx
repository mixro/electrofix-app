import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const data = [
  {
    title: "Components",
    description: "Explore various electrical components & Devices in different categories.",
    image: require('@/assets/photos/generator.png'), // The Predator generator image
    color: '#4A5568' 
  },
  {
    title: "Suppliers",
    description: "Explore various electrical components & Devices in different categories.",
    image: require('@/assets/photos/generator.png'), // The Predator generator image
    color: '#4A5568' 
  },
  {
    title: "Technicians",
    description: "Explore various electrical components & Devices in different categories.",
    image: require('@/assets/photos/generator.png'), // The Predator generator image
    color: '#4A5568' 
  },
  // ... more items
];

export default function AppCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width} // Slightly less than screen width for padding
        height={200}
        autoPlay={true}
        data={data}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.color }]}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View  →</Text>
              </TouchableOpacity>
            </View>
            
            <Image 
              source={item.image} 
              style={styles.image} 
              resizeMode="contain" 
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden'
  },
  card: {
    flexDirection: 'row',
    borderRadius: 0,
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: '100%',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#CBD5E0',
    fontSize: 12,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});