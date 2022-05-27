import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInfoString = ({ text, onChange, name, textContentType }) => {
    return (
        <View style={styles.info}>
            <View style={styles.change}>
                <Text style={{ flex: 1 }}>{ name }</Text>
                {onChange 
                    ?   <Text
                            style={{ flex: -1, marginRight: 20, opacity: .5 }}
                            onPress={onChange}
                            secureTextInput
                        >
                            change
                        </Text>
                    :   <Text></Text>}
            </View>
            <Text style={styles.userInfo}>{text}</Text>
        </View>
    )
}

export default UserInfoString;

const styles = StyleSheet.create({
    info: {
        height: 80,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        justifyContent: 'center'
    },
    change: {
        flexDirection: 'row'
    },
    userInfo: {
        color: '#0001FC'
    }
})
