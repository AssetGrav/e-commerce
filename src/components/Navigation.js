import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { BestSelling } from './navMenu/BestSelling';
import { Gifts } from './navMenu/Gifts';
import { Favorite } from './navMenu/Favorite';
import { TabNav } from './TabNav';
import Categories from './navMenu/Categories';
import Category from './Category';
import { ProductDetails } from '../screens/ProductDetails';
import { CartProvider } from "../hook/CartContext";
import { ProductsProvider } from "../hook/ProductsContext.js";
import Auth from '../screens/auth';
import Register from '../screens/register';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export function Navigation() {
    return (
        <NavigationContainer>
            <ProductsProvider>
                <CartProvider>
                    <Stack.Navigator>
                        {/* <Stack.Screen
                            name="Auth"
                            component={Auth}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                        /> */}
                        <Stack.Screen
                            name="HomePage"
                            component={TabNav}
                        />
                        <Stack.Screen
                            name="Категории"
                            component={Categories}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Вся продукция"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Овощи"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Мясо"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Кисломолочка"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Фрукты"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Разное"
                            component={Category}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="ProductDetails"
                            component={ProductDetails}
                            options={{
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Избранные"
                            component={Favorite}
                        />
                        <Stack.Screen 
                            name="Подарки" 
                            component={Gifts} 
                        />
                        <Stack.Screen 
                            name="Спрос" 
                            component={BestSelling} 
                        />
                    </Stack.Navigator> 
                </CartProvider>
            </ProductsProvider>           
        </NavigationContainer>
    );
}




