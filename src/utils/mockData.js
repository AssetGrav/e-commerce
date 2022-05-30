import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { firebase } from '../../firebase';
import { products } from '../utils/mock';
import { categories } from '../services/CategoriesService';

const useMockData = () => {
    // async function initialize() {
    //     try {
    //         for (const categ of categories) {
    //             const categoryRef = firebase.database()
    //                 .ref('/category/')
        
    //             categoryRef.push(categ)
    //         }
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }
    async function initialize() {
        try {
            for (const prod of products) {
                console.log("prod", prod)
                const productRef = firebase.database()
                    .ref('/product/')
        
                productRef.push(prod)
            }
        } catch (error) {
            alert(error.message)
        }
    }

  return { initialize }
}

export default useMockData

const styles = StyleSheet.create({})