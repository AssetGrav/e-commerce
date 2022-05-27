import React, { useContext, useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { ProductsContext } from '../../hook/ProductsContext';
import { ProductsList } from '../../screens/ProductsList';
import UselessTextInput from '../UselessTextInput';

export const Search = () => {
    const [text, onChangeText] = useState('')
    const [productArr, setProductArr] = useState([])
    const { products } = useContext(ProductsContext)
    const findProduct = (text) => {
        const newProductsArr = products.filter((elem) => {
            if (elem.name.toLowerCase().substr(0, text.length) === text.toLowerCase()) {
                return elem
            }
        })
        setProductArr(newProductsArr)
    }
    useEffect(() => {
        if (text === '') {
            setProductArr(products)
        }
    }, [text])

    return (
        <View>
            <UselessTextInput value={text} onChangeName={onChangeText} placeholder="введите название" />
            <Button disabled={text.length === 0 ? true : false} title="найти" onPress={() => findProduct(text.trim())}></Button>
            <ProductsList products={productArr} />
        </View>
    )
}