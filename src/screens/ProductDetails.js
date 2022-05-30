import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import {CartContext} from "../hook/CartContext";
import { ProductsContext } from '../hook/ProductsContext';

export function ProductDetails({route}) {
    const {productId} = route.params;
    const [product, setProduct] = useState({});
    const { getProduct } = useContext(ProductsContext)
    useEffect(() => {
      setProduct(getProduct(productId))
    }, [])
    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(product)
    }

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image}} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price} тг</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Button onPress={onAddToCart} title="Add To Cart" />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 400,
    height: 350,
    aspectRatio: 1
  },
  infoContainer: {
    padding: 16
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});