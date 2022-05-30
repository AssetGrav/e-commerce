import React, { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const prodArray = []
        try {
            db
                .ref('product/')
                .once('value')
                .then(snapshot => {
                    const pro = snapshot.val()
                    Object.values(pro).map((elem) => prodArray.push(elem))
                    if(prodArray !== []) {
                        setProducts(prodArray)
                    } 
                })
        } catch (error){
            alert(error.message)
        }
        
    }, [])

    function getProduct(id) {
        return products.find((elem) => elem._id === id)
    }
    
    function getProductsByCategory(categId) {
        return products.filter((elem) => elem.category === categId)
    }

    return (
        <ProductsContext.Provider value={{ products, getProduct, getProductsByCategory }}>
            {props.children}
        </ProductsContext.Provider>
    )
}