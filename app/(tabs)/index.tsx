import { useTheme } from '@/src/context/ThemeContext';
import { Dimensions, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import Topbar from '../../src/components/navigation/topbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppCarousel from '@/src/components/ui/appCarousel';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { theme } = useTheme();  

  const categories = [
    {
      title: "Components",
      path: "components",
      desc: "Explore electrical parts, symbols, functions, and maintenance tips.",
      icon: <MaterialCommunityIcons name="cog" size={32} color="#E31E24" />,
    },
    {
      title: "Problem Solver",
      path: "problemSolver",
      desc: "Diagnose faults with step-by-step troubleshooting and safety guides.",
      icon: <MaterialCommunityIcons name="wrench" size={32} color="#E31E24" />,
    },
    {
      title: "Where to Buy",
      path: "suppliers",
      desc: "Locate trusted suppliers near you with pricing and contact details.",
      icon: <MaterialCommunityIcons name="cart" size={32} color="#E31E24" />,
    },
    {
      title: "Learn Electrical",
      path: "problemSolver",
      desc: "Master electrical theory, wiring practices, and safety standards.",
      icon: <MaterialCommunityIcons name="book" size={32} color="#E31E24" />,
    },
    {
      title: "Technicians",
      path: "technicians",
      desc: "Connect with certified professionals and available local services.",
      icon: <FontAwesome5 name="users" size={28} color="#E31E24" />,
    },
    {
      title: "About & Contact",
      path: "about",
      desc: "App information, developer contact, feedback, and disclaimers.",
      icon: <Ionicons name="information-circle" size={34} color="#E31E24" />,
    },
  ];

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, minHeight: "100%" }} className='px-4'>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin: 0, padding: 0}}>
          <Topbar />

          <AppCarousel />

          <View className="flex-1 px-0 py-6 pb-4">
            <Text style={{color: theme.text}} className="text-center text-2xl font-bold tracking-widest text-black mb-8">
              ALL COVERED
            </Text>

            <View className="flex-row flex-wrap justify-between">
              {categories.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  activeOpacity={0.7}
                  style={[styles.card, { width: '47%',  backgroundColor: theme.background, borderColor: theme.light_gray, shadowColor: theme.text}]}
                  className="mx-1 rounded-2xl p-4 mb-4 items-center border"
                >
                  <Link href={`/${item.path}` as any} asChild>
                    <Pressable>
                      <View className="mb-3 h-10 justify-center flex-row items-center">
                        {item.icon}
                      </View>

                      <Text style={{color: theme.text}} className="text-[15px] font-bold text-center mb-1">
                        {item.title}
                      </Text>

                      <Text 
                        style={{color: theme.gray_text}}
                        className="text-[12px] text-gray-500 text-center leading-4"
                        numberOfLines={4}
                      >
                        {item.desc}
                      </Text>
                    </Pressable>
                  </Link>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Text className="font-bold text-lg text-center mb-3">© ElectroFix</Text>
        </ScrollView>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
