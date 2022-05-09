import React from 'react';
import { Cart } from './downMenu/Cart';
import { Search } from './downMenu/Search';
import { User } from './downMenu/User';
import { Home } from './downMenu/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function TabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#EFF5FB' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Корзина"
                component={Cart}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
} 