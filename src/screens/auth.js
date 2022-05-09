import React from 'react';
import { KeyboardAvoidingView, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import UselessTextInput from '../components/UselessTextInput';

const Auth = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View style={styles.inputContainer}>
                <UselessTextInput 
                    placeholder='Email'
                    // value={}
                    // onChangeText={text => }
                    style={styles.input}
                />
                <UselessTextInput
                    placeholder='Password'
                    // value={ }
                    // onChangeText={text => }
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}
                >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
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
        justifyContent: 'center'
    }
})