import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = ({ value, placeholder, onChangeName, keyboardType }) => {

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default UselessTextInput;