import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useTheme } from '@/src/context/ThemeContext';

export default function sidebar() {
  const { theme } = useTheme();


  return (
    <View>
        <View style={{marginBottom: 20}}>
            <Link href='/(tabs)' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <Ionicons name="home" color={theme.icons} size={24} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Home</Text>
                </View>
            </Link>
            <Link href='/(tabs)/components' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <MaterialCommunityIcons name="generator-portable" color={theme.icons} size={24} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Products</Text>
                </View>
            </Link>
            <Link href='/(tabs)/problemSolver' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <Entypo name="tools" color={theme.icons} size={24} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Fault Fixing</Text>
                </View>
            </Link>
            <Link href='/(tabs)/suppliers' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <MaterialCommunityIcons name="cart" color={theme.icons} size={24} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Suppliers</Text>
                </View>
            </Link>
            <Link href='/technicians' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <MaterialCommunityIcons name="account-wrench" color={theme.icons} size={24} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Technicians</Text>
                </View>
            </Link>
        </View>
        
        {/* <Text className='text-lg font-semibold mb-7' style={{color: theme.text}}>Authenticate</Text>

        <View style={{marginBottom: 30}}>
            <Link href='/' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <MaterialIcons name="login" size={24} color={theme.icons} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Login</Text>
                </View>
            </Link>
            <Link href='/' className='mb-3'>
                <View className='flex-row items-center gap-5' style={[{backgroundColor: theme.menu_button}, styles.item]}>
                    <Ionicons name="person-add-sharp" size={24} color={theme.icons} />
                    <Text className='text-lg font-bold' style={{color: theme.darker_text}}>Sign up</Text>
                </View>
            </Link>
            <TouchableOpacity activeOpacity={0.7} className='flex-row items-center gap-5' 
                style={[{backgroundColor: "#fdc200ff"}, styles.item]}
                //onPress={handleLogout}
            >
                <AntDesign name="logout" size={24} color="black" />
                <Text className='text-lg font-bold' style={{color: "black"}}>logout</Text>
            </TouchableOpacity>
        </View> */}

        <Text className='text-lg font-semibold mb-7' style={{color: theme.text}}>About</Text>

        <Link href='/(tabs)/about' className='mb-10'>
            <View className='flex-row items-center gap-5' style={[{backgroundColor: "#fdc200ff"}, styles.item]}>
                <Entypo name="info-with-circle" size={24} color="black" />
                <Text className='text-lg font-bold' style={{color: "black"}}>About</Text>
            </View>
        </Link>
    </View>
  )
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: "100%",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})