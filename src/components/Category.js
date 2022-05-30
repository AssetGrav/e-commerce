import React, { useContext }  from 'react';
import { View } from 'react-native';
import { ProductsList } from '../screens/ProductsList';
import { ProductsContext } from '../hook/ProductsContext';
import { CategoriesContext } from '../hook/CategoriesContext';

const Category = ({ route }) => {
    const { getCategory } = useContext(CategoriesContext)
    const categ = getCategory(route.params.name)
    const { getProductsByCategory } = useContext(ProductsContext)
    const products = getProductsByCategory(categ._id)
    return (
        <View>
            <ProductsList products={products} />
        </View>
    )
}

export default Category;
