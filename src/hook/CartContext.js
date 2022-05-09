import { useNavigation } from "@react-navigation/native";
import React, {createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props){
    const navigation = useNavigation()

    const [items, setItems] = useState([]);

    function addItemToCart(product){
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id === product._id));
            if(!item){
                return [...prevItems, {
                    id: product._id,
                    qty: 1,
                    product,
                    totalPrice: product.price
                }]
            }else{                
                return [ ...prevItems]
            }
        })
    }

    function getItemsCount(id, value){
        console.log("?", id)
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    item.qty = value
                    item.totalPrice = item.product.price * value;
                }
                return item;
            })
        })
    }

    function getTotalPrice() {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    return(
        <CartContext.Provider value={{items, getItemsCount, addItemToCart, getTotalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}