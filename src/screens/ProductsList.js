import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Product } from "../components/Product";

export function ProductsList({ products }){
    const navigation = useNavigation()
    function renderProduct({item: product}){
        return(
            <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {productId: product._id})
                }}
            />
        )
    }

    return(
        <FlatList 
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item._id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )

}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });
  