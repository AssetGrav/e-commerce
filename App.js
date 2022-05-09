import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, View, Text } from "react-native";
// import { ProductsList } from "./src/screens/ProductsList.js";
// import { ProductDetails } from "./src/screens/ProductDetails.js";
// import { Cart } from "./src/screens/Cart.js";
import { CartProvider } from "./src/hook/CartContext.js";
import { Navigation } from "./src/components/Navigation.js";
import { ProductsProvider } from "./src/hook/ProductsContext.js";

function App(){
  return(
        <>
          {/* <Stack.Navigator>
            
            <Stack.Screen
              name="Products"
              component={ProductsList}
              options={({navigation}) =>
                ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({navigation}) =>
                ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={({navigation}) =>
                ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          </Stack.Navigator> */}
            <Navigation />
        </>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  header: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    paddingBottom: 10
  },
  card: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    backgroundColor: '#0001FC',
    opacity: 0.3,
    margin: '4%'
  }
})

export default App;