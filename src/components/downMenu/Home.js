import React, { useContext } from 'react';
import { ProductsContext } from '../../hook/ProductsContext';
import { View, StyleSheet } from 'react-native';
import { Header } from '../Header';
import { ProductsList } from '../../screens/ProductsList';
import { MenuUp } from '../MenuUp';

export const Home = () => {
    const { products } = useContext(ProductsContext)

    return (
        <View style={[ styles.container , {flexDirection: "column"}]}>
            <View style={styles.card}>
                <Header />
            </View>
            <View>
                <MenuUp />
            </View>
            <View style={{ flex: 1, backgroundColor: "green" }}>
                <ProductsList products= {products} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF5FB'
    },
    card: {
        height: 100,
        backgroundColor: '#0001FC',
        margin: '4%'
    },
    menu: {
        height: 110,
        backgroundColor: '#ffffff',
        margin: '0%'
    },
    circle: {
        justifyContent: 'space-between',
        borderWidth: 10,
        borderColor: '#fff',
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        backgroundColor: '#E0ECF8'
    }
})