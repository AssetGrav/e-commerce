import React from 'react';
import { StyleSheet, SafeAreaView, TextInput } from "react-native";

const TextInputNumber = ({ onChange, value, keyboardType, maxLength }) => {

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChange={onChange}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}  //setting limit of input
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 8,
        marginRight: 8,
        borderWidth: 1,
        padding: 10,
        transform: [{ translateY: 15 }]
    },
})

export default TextInputNumber;
