import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import Politic from './navMenu/Politic';
import Contacts from './navMenu/Contacts';
import AboutUs from './navMenu/AboutUs';
import { TabNav } from './TabNav';
import Categories from './navMenu/Categories';
import Category from './Category';
import { ProductDetails } from '../screens/ProductDetails';
import { UserProvider } from '../hook/UserContext';
import { CartProvider } from "../hook/CartContext";
import { ProductsProvider } from "../hook/ProductsContext.js";
import Auth from '../screens/auth';
import { UserInfo } from './user/UserInfo';
import EditPage from './user/EditPage';
import Help from './Help';
import TermsOfUse from './TermsOfUse';
import { CategoriesProvider } from '../hook/CategoriesContext';
import Orders from './Orders';

const Stack = createStackNavigator();

export function Navigation() {
    return (
        <NavigationContainer>
            <UserProvider>
                <ProductsProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <Stack.Navigator>
                                <Stack.Screen
                                    name="Auth"
                                    component={Auth}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="HomePage"
                                    component={TabNav}
                                    options={{ headerShown: false }}
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
                                />
                                <Stack.Screen
                                    name="Овощи"
                                    component={Category}
                                />
                                <Stack.Screen
                                    name="Мясо"
                                    component={Category}
                                />
                                <Stack.Screen
                                    name="Кисломолочка"
                                    component={Category}
                                />
                                <Stack.Screen
                                    name="Фрукты"
                                    component={Category}
                                />
                                <Stack.Screen
                                    name="Разное"
                                    component={Category}
                                />
                                <Stack.Screen
                                    name="ProductDetails"
                                    component={ProductDetails}
                                />
                                <Stack.Screen
                                    name="О нас"
                                    component={AboutUs}
                                />
                                <Stack.Screen 
                                    name="Контакты" 
                                    component={Contacts} 
                                />
                                <Stack.Screen 
                                    name="Политика" 
                                    component={Politic} 
                                />
                                <Stack.Screen
                                    name="Заказы"
                                    component={Orders}
                                />
                                <Stack.Screen
                                    name="Информация о пользователе"
                                    component={UserInfo}
                                />
                                <Stack.Screen
                                    name="Условия"
                                    component={TermsOfUse}
                                />
                                <Stack.Screen
                                    name="Помощь"
                                    component={Help}
                                />
                                <Stack.Screen
                                    name="Email"
                                    component={EditPage}
                                />
                                <Stack.Screen
                                    name="Имя и Фамилия"
                                    component={EditPage}
                                />
                                <Stack.Screen
                                    name="Phone number"
                                    component={EditPage}
                                />
                                <Stack.Screen
                                    name="Password"
                                    component={EditPage}
                                />
                            </Stack.Navigator> 
                        </CartProvider>
                    </CategoriesProvider>
                </ProductsProvider>
            </UserProvider>     
        </NavigationContainer>
    );
}




