import { useNavigation } from "@react-navigation/native";
import React, {createContext, useEffect, useState } from "react";
import { db, firebase } from "../../firebase";

export const CartContext = createContext();

export function CartProvider(props){
    const navigation = useNavigation()

    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

    }, [items])

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
        if (value > 0 ) {
            setItems((prevItems) => {
                return prevItems.map((item) => {
                    if (item.id === id) {
                        item.qty = value
                        item.totalPrice = item.product.price * value;
                    }
                    return item;
                })
            })
        } else if (value === 0) {
            setItems((prevItems) => {
                return prevItems.filter((item) => {
                    return item.id !== id 
                })
            })
        }
    }

    function getTotalPrice() {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    async function getOrder(data) {
        console.log(data)
        try {
            const productRef = firebase.database()
                .ref('/order/')

            await productRef.push(data)
            setItems([])
        } catch (error) {
            alert(error.message)
        }
    }
    async function getOrders(user){
        const orderArray = []
        await db
            .ref('order/')
            .once('value')
            .then(snapshot => {
                const pro = snapshot.val()
                console.log("pro", pro)
                Object.values(pro).map((elem) => orderArray.push(elem))
                console.log("orderArray", orderArray)
                orderArray.filter((elem) => elem.orderUser === user)
                if (orderArray !== []) {
                    setOrders(orderArray)
                } 
            })
    }

    return(
        <CartContext.Provider value={{items, getItemsCount, addItemToCart, getTotalPrice, getOrder, getOrders, orders}}>
            {props.children}
        </CartContext.Provider>
    )

}