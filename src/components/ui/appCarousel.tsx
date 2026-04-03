import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const data = [
  {
    title: "Components",
    path: "components",
    description: "Identify and explore electrical devices across various categories.",
    image: require('@/assets/photos/generator.png'), 
    colors: ["#1C2526", "#2c4d50", "#336f75"]
  },
  {
    title: "Suppliers",
    path: "suppliers",
    description: "Connect with verified electrical equipment suppliers in Tanzania.",
    image: require('@/assets/photos/package.png'), 
    colors: ["#012727", "#006464"]
  },
  {
    title: "Technicians",
    path: "technicians",
    description: "Hire certified engineers and technicians for your electrical projects.",
    image: require('@/assets/photos/technician.png'), 
    colors: ["#05291f", "#0f766e"]
  },
];

export default function AppCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width} 
        height={200}
        autoPlay={true}
        data={data}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <LinearGradient
            colors={item.colors as [string, string, ...string[]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.description}>{item.description}</Text>

              <TouchableOpacity style={styles.button}>
                <Link href={`/${item.path}` as any} asChild>
                  <Pressable>
                    <Text style={styles.buttonText}>View  →</Text>
                  </Pressable>
                </Link>
              </TouchableOpacity>
            </View>
            
            <Image 
              source={item.image} 
              style={styles.image} 
              resizeMode="contain" 
            />
          </LinearGradient>
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