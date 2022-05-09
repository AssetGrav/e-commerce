import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, FlatList, StyleSheet, SafeAreaView, TextInput} from "react-native";
import {CartContext} from "../../hook/CartContext";
import NumericInput from 'react-native-numeric-input';

export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
	
    function Totals(){
        const [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}> {total} тг</Text>
            </View>
        )
    }

    function renderItem({item}){
		const onChangeCount = (value) => (
			getItemsCount(item.product._id, value), console.log("val", value)
		)
		
        return(
            <>
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
					<View style={styles.lineLeft}>
						<View style={styles.text}>
							<Text>
								{item.product.name}
							</Text>
						</View>
						<View style={styles.input}>
							<View>
								<NumericInput 
									className="form-control"
									type='up-down'
									onChange={onChangeCount}
									value={item.qty} 
									step={1}
									iconSize={20}
								/>
							</View>
							<View>
								<Text style={styles.productTotal}>
									x {item.totalPrice} тг
								</Text>
							</View>
						</View>
					</View>
                </View>
            </>
        )
    }

    return(
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product._id.toString()}
            ListFooterComponent={Totals}
        />
    )
   
}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		flexDirection: "row",
		flexWrap: "wrap"
	},
	text: {
		width: '100%',
		lineHeight: 40,
		fontSize: 20,
		color: '#333333',
	},
	input: {
		flexDirection: 'column',
		margin: 1
		// transform: [{ translateY: 30 }]
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'right'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
	}
})