import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { UserContext } from '../../hook/UserContext';
import UselessTextInput from '../UselessTextInput';
import UserInfoString from '../UserInfoString';
import { validator } from '../../utils/validator';
import { useNavigation } from '@react-navigation/native';

const EditPage = ({ route }) => {
    const [ value, onChangeText ] = useState('')
    const [ value2, onChangeText2 ] = useState('')
    const [ errors, setErrors ] = useState({})
    const [ data, setData ] = useState({})
    const { user, userUpgrade } = useContext(UserContext)
    const navigation = useNavigation();
    useEffect(() => {
        setData(user)
    }, [])
    useEffect(() => {
       updateValue(value, route.params.changeName)
    }, [value])
    const onChangeInputText = (data, text, text2) => {
        const isValid = validate();
        if (!isValid) return;
        userUpgrade(data, text, text2)
        navigation.navigate("HomePage")
    }
    function updateValue(date, value) {
        setData((prevState) => ({
            ...prevState,
            [date]: value
        }))
    }
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя и фамилию"
            },
            isName: {
                message: "Ввведите через пробел"
            }
        },
        phone: {
            isRequired: {
                message: "Введите номер мобильного"
            },
            isPhone: {
                message: "Не соответствие номера"
            }
        },
        password: {
            isRequired: {
                message: "Введите номер мобильного"
            },
            isPassword: {
                message: "Длина пароля 8 символов"
            },
            isContainDigit: {
                message: "Пароль должен содержать цифру"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать большую букву"
            }
        }
    };
    
    useEffect(() => {
        validate()
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const result = Object.keys(errors).map((elem) => {
        return elem !== route.params.name ? errors[elem] : ""
        }
    )
    return (
        <View style={styles.container}>
            <UserInfoString text={route.params.name} name={'Текущий' + ' ' + route.name}/>
            <Text style={styles.text}>Новый {route.name}</Text>
            <UselessTextInput
                name={route.params.changeName}
                onChangeName={(text) => onChangeText(text)}
                value={value}
                placeholder={route.params.name}
                error={result}
            />
            
            {route.params.changeName === 'password'
                ?   <View>
                        <Text style={styles.text}>Старый пароль {route.name}</Text>
                        <UselessTextInput
                            name={route.params.changeName}
                            onChangeName={(text) => onChangeText2(text)}
                            value={value2}
                            placeholder={route.params.name}
                        />
                    </View>
                : <Text></Text>
            }
            <Button
                title="поменять"
                disabled={!isValid}
                onPress={() => onChangeInputText(route.params.changeName, value, value2)} />
            <Text>Не совпадает текст</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF5FB'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        paddingLeft: 20
    },
    edit: {
        margin: '2%',
        paddingTop: 20
    }
})

export default EditPage;

