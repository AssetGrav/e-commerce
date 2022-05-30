import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { CategoriesContext } from '../../hook/CategoriesContext';

const Item = ({ title, navigation }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate(title, {name: title})}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
    
);

const Categories = ({ navigation }) => {
    const { categories } = useContext(CategoriesContext)
    const renderItem = ({ item }) => (
        <Item title={item.title} navigation={navigation} />
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: '#EFF5FB'
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Categories;

