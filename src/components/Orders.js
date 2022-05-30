import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../hook/UserContext'
import { CartContext } from '../hook/CartContext'

const Orders = () => {
  const { user } = useContext(UserContext)
  const { orders, getOrders } = useContext(CartContext)
  function renderItem({ item }) {
    return (
      <>
        <View style={styles.cartLine}>
            <View style={styles.text}>
              <Text>
                {item.orderInfo.products.map((elem) =>
                  elem.product.name + " " + elem.qty + " " + elem.product.measurement + " * " + " " + elem.product.price + " тг"  + ", ")}
              </Text>
            </View>
            <View style={styles.input}>
              <Text>
                 Сумма заказа: { item.orderInfo.total} тг
              </Text>
            </View>
        </View>
      </>
    )
  }
  return (
      <> 
        <View style={styles.container}>
          <Button title="запросить" onPress={() => getOrders(user)}></Button>
          <FlatList
              style={styles.itemsList}
              contentContainerStyle={styles.itemsListContainer}
              data={orders}
              renderItem={renderItem}
              keyExtractor={(item) => item.orderInfo._id}
          />
        </View>
      </>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  text: {
    fontSize: 16
  },
  cartLine: {
    margin: '4%'
  }
})