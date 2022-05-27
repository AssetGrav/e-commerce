import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";

const UselessTextInput = ({ value, placeholder, onChangeName, keyboardType, error, secureTextEntry }) => {
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry ? true : false }
            />
            <View style={styles.error}>
                {error !== "" ? <Text style={styles.text}>{error}</Text> : <Text>{""}</Text>}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 4,
        borderWidth: 1
    },
    error: {
        margin: 12,
        paddingLeft: 10
    },
    text: {
        color: 'red'
    }
});

export default UselessTextInput;