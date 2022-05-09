import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
    return (
        <View>
            <Text style={styles.text}>Приветствуем Вас в нашем магазине</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        color: 'white',
        fontSize: 18
    }
})