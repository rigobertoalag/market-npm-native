import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainCategories from './categories/MainCategories';
import MainItems from './items/MainItems';

const Carousel = () => (
    <View style={{ backgroundColor: 'grey', height: 200 }}>
        <Text>aqui va el carousel</Text>
    </View>
)
import { useSelector } from 'react-redux'

export default function HomeScreen({ navigation }) {
    const [userToken, setUserToken] = useState()
    const [userEmail, setUserEmail] = useState()

    const token = useSelector((state) => state.dataUser.utoken)

    // // Funcion que obtiene los datos del usuario logeado
    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@storage_Key')
    //         return jsonValue != null ? (setUserToken(JSON.parse(jsonValue).token), setUserEmail(JSON.parse(jsonValue).email)) : console.log('Inicia sesion')
    //     } catch (e) {
    //         // error reading value
    //         console.log('Hubo un error')
    //     }
    // }

    // Funcion para cerrar la sesion del usuario(elimina los datos del cache)
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('@storage_Key')
            navigation.navigate('Home')
            setUserToken('')
            setUserEmail('')
        } catch (e) {
            // remove error
            console.log('Hubo un error')
        }
        console.log('Sesion cerrada')
    }

    console.log(userToken, userEmail)

    // // Effect para no tener que hacer nada para cargar los datos del usuario obtenido
    // useEffect(() => {
    //     getData();
    // });

    return (
        <ScrollView style={{ marginVertical: 100, marginBottom: 0, marginTop: 0 }}>

            <Text>hola este esl toke desde homescreen: {token}</Text>


            {/* Carrusel */}
            <Carousel />

            {/* Se muestra la barra de categorias */}
            <MainCategories />

            {/* {
                userToken ? <Text>Hola: {userEmail}</Text> : <Text>Hola invitado, inicia sesion o vete al demonio</Text>
            } */}

            {
                token ? <Text>Hola: {userEmail}</Text> : <Text>Hola invitado, inicia sesion o vete al demonio</Text>
            }

            {/* Se muestran los productos */}
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignContent: 'center', justifyContent: 'center' }}>
                <MainItems navigation={navigation} />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

})