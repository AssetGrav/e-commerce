import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Product } from "../components/Product";

export function ProductsList({ products }){
    const navigation = useNavigation()
    function renderProduct({item: product}){
        return(
            <SafeAreaView>
                <Product 
                    {...product}
                    onPress={() => {
                        navigation.navigate('ProductDetails', {productId: product._id})
                    }}
                />
            </SafeAreaView>
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
  