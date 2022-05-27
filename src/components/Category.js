import React, { useContext, useParams }  from 'react';
import { View } from 'react-native';
import { ProductsList } from '../screens/ProductsList';
import { ProductsContext } from '../hook/ProductsContext';
import { CategoriesContext } from '../hook/CategoriesContext';

const Category = ({ route }) => {
    console.log("route", route)
    const { getCategory } = useContext(CategoriesContext)
    const categ = getCategory(route.params.name)
    console.log("categ", categ)
    const { getProductsByCategory } = useContext(ProductsContext)
    const products = getProductsByCategory(categ._id)
    console.log("prod", products)
    return (
        <View>
            <ProductsList products={products} />
        </View>
    )
}

export default Category;
