import { useTheme } from '@/src/context/ThemeContext';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Topbar from '../../src/components/navigation/topbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppCarousel from '@/src/components/ui/appCarousel';

export default function HomeScreen() {
  const { theme } = useTheme();  


  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: theme.background, minHeight: "100%" }} className='px-4'>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin: 0, padding: 0}}>
          <Topbar />

          <AppCarousel />

          

          <Text className="font-black">Hello</Text>
        </ScrollView>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
