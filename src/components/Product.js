import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";

export function Product({ name, price, image, onPress, measurement}){

    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.size}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}> {price} тг за 1 {measurement}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: { 
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    size: {
        margin: '4%'
    },
    image: {
        aspectRatio: 1,
        maxWidth: 150,
        maxHeight: 150,
        resizeMode: 'cover'
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    }
})