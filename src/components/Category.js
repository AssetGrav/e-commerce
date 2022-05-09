import React, { useContext }  from 'react';
import { View } from 'react-native';
import { ProductsList } from '../screens/ProductsList';
import { useRoute } from '@react-navigation/native';
import ProductsService from '../services/ProductsService';
import { ProductsContext } from '../hook/ProductsContext';

const Category = () => {
    const route = useRoute()
    const { products } = useContext(ProductsContext)

    return (
        <View>
            <ProductsList products={products} />
        </View>
    )
}

export default Category;
