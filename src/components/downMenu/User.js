import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../../hook/CartContext';
import { UserContext } from '../../hook/UserContext';
import SignOut from '../SignOut';

export const User = ({ navigation }) => {
    const { user } = useContext(UserContext)
    const { getOrders } = useContext(CartContext)
    if (user) {
        return (
            <View style={[styles.container, { flexDirection: "column" }]}>
                <View style={styles.head}>
                    <View style={{ flex: 1, marginLeft: '5%' }}>
                        <Image 
                            source={{ source: user.image }}
                            style={{ width: 70, height: 70, borderRadius: 70/2 }} 
                        />
                    </View>
                    <View style={{ flex: 3, paddingTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{user.name}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Заказы')}
                    >
                        <Text>Заказы</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Информация о пользователе', { user: user })}
                    >
                        <Text>Информация о пользователе</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Условия')}
                    >
                         <Text>Условия использования</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Помощь')}
                    >
                        <Text style={{ fontWeight: 'bold' }}>Help</Text>
                    </TouchableOpacity>
                </View>
                <SignOut />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF5FB'
    },
    head: {
        height: 80,
        padding: 2,
        backgroundColor: 'white',
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    info: {
        height: 53,
        paddingLeft: 10, 
        backgroundColor: 'white',
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        justifyContent: 'center'
    },
    help: {
        paddingTop: 10,
        paddingLeft: 10,
        height: '100%',
        backgroundColor: 'white',
        margin: '4%',
        marginLeft: '4%',
        marginRight: '4%'
    }
})