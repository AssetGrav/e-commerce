import React, { createContext, useState, useEffect } from "react";
import ProductsService from "../services/ProductsService";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        ProductsService.fetchAll().then((res) => setProducts(res))

    }, [products])

    return (
        <ProductsContext.Provider value={{ products }}>
            {props.children}
        </ProductsContext.Provider>
    )
}