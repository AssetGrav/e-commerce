import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import UselessTextInput from '../components/UselessTextInput';
import { auth } from '../../firebase.js'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../hook/UserContext';
import useMockData from '../utils/mockData';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // загрузка данных в firebase с помощью хука
    // const { initialize } = useMockData()
    // useEffect(() => {
    //     initialize()
    // }, []) 

    const { getUser, error, signIn } = useContext(UserContext)

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userName => {
            if (userName) {
                navigation.navigate('HomePage')
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        getUser(email, password)
    }

    const handleLogin = () => {
        signIn(email, password)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='height'
        >
            <View style={styles.inputContainer}>
                <UselessTextInput 
                    placeholder='Email'
                    value={email}
                    onChangeName={text => setEmail(text.trim())}
                />
                <UselessTextInput
                    placeholder='Password'
                    value={password}
                    onChangeName={text => setPassword(text.trim())}
                    error={error}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        margin: 1
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
})