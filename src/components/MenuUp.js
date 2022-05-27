import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MenuUp = () => {
    const navigation = useNavigation()
    const menuSymbol = [
        { 
            name: 'Категории',
            materialIcon: 'menu' 
        }, 
        {
            name: 'О нас',
            materialIcon: 'star-outline'
        },
        {
            name: 'Контакты',
            materialIcon: 'gift-outline'
        },
        {
            name: 'Политика',
            materialIcon: 'account-multiple-outline'
        }
    ]
    
    return (
        <View style={styles.menu}>
            { menuSymbol.map((elem) => 
                (
                    <TouchableOpacity  onPress={() => navigation.navigate(elem)} key={elem.name} >
                        <View style={styles.circle}>
                            <MaterialCommunityIcons name={elem.materialIcon} color='#0001FC' size={20} />
                        </View>
                        <Text style={styles.text}>{elem.name}</Text>
                    </TouchableOpacity>
                ))  
            }
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    menu: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#ffffff',
        margin: '0%',
        justifyContent: "space-around"
    },
    circle: {
        borderWidth: 10,
        borderColor: '#fff',
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: '#E0ECF8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})