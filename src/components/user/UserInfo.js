import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../hook/UserContext';
import UserInfoString from '../UserInfoString';

export const UserInfo = () => {
    const { user } = useContext(UserContext)
    const navigation = useNavigation()

    const handleChange = (name, data, changeName) => {
        navigation.navigate(name, { name: data === undefined ? "" : data, changeName: changeName })
    }
    return (
        <View style={styles.container}>
            <UserInfoString 
                text={user.displayName} 
                name='Имя и Фамилия' 
                onChange={() => handleChange('Имя и Фамилия', user.name, 'displayName' )} />
            <UserInfoString 
                text={user.email} 
                name='Email' 
                onChange={() => handleChange('Email', user.email, 'email' )} />
            <UserInfoString 
                text={user.password} 
                name='Password' 
                onChange={() => handleChange('Password', user.password, 'password' )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF5FB'
    }
})