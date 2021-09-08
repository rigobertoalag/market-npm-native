import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            //const jsonValue = value
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getLogin = () => {
        return fetch('http://localhost:3000/api/v1/tokens', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: pass
                }
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                storeData(json)
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.hero}>Ingresa tus datos</Text>

            <Text style={styles.label}>Correo</Text>
            <TextInput
                onChangeText={setEmail}
                // value={number}
                placeholder="Ingresa tu correo"
                keyboardType="email-address"
                style={styles.input}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                onChangeText={setPass}
                // value={number}
                placeholder="Ingresa tu contraseña"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.input}
            />

            <View style={styles.centerElements}>
                <Button
                    title='Entrar'
                    // onPress={() => {getLogin(), navigation.navigate('Home')}}
                    onPress={() => getLogin()}
                />
            </View>

            <View style={styles.separator}></View>

            <View style={styles.centerElements}>
                <Text style={styles.adviseText}>¿Aun no tienes cuenta?</Text>
                <Button
                    title='Registrate'
                    onPress={() => navigation.navigate('register')}
                />
            </View>
        </View>
    )
}

