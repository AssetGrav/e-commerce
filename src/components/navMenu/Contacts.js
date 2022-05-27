import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.header}>Контакты</Text>
            <Text style={styles.header}>Крестьянского хозяйства «Есментаев Сагиндык Байданович»</Text>
                
            <Text style={styles.text}>ФИО руководителя: Есментаев Сагиндык Байданович</Text>
            <Text style={styles.text}>Юридический адрес:  Костанайская область, Костанайский район, село Жамбыл</Text>
            <Text style={styles.text}>БИН: 561205300250</Text>
            <Text style={styles.text}>Банковские реквизиты: KZ74998GTB0000201413, 19,  АО “First Heartland Jysan Bank” TSESKZKA (ИИК, Кбе, банк).</Text>
            <Text style={styles.text}>Номер телефона: +77474690408</Text>
            <Text style={styles.text}>e-mail: agrokstdbase@gmail.com</Text>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '4%'
    },
    header: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    },
    text: {
        textAlign: 'justify',
        fontSize: 16
    }
})