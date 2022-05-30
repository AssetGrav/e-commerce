import React, { createContext, useState, useEffect } from 'react'
import { db } from '../../firebase'

export const CategoriesContext = createContext()

export const CategoriesProvider = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const prodArray = []
        try {
            db
                .ref('category/')
                .once('value')
                .then(snapshot => {
                    const pro = snapshot.val()
                    Object.values(pro).map((elem) => prodArray.push(elem))
                    setCategories(prodArray)
                })
        } catch (error) {
            alert(error.message)
        }
        
    }, [])

    function getCategory(categ) {
        return categories.find((elem) => elem.title === categ)
    }

    return (
        <CategoriesContext.Provider value={{ categories, getCategory }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}