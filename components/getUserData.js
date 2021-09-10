import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function getUserData() {
    const [userToken, setUserToken] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? (setUserToken(JSON.parse(jsonValue).token), setUserEmail(JSON.parse(jsonValue).email)) : console.log('Inicia sesion')
        } catch (e) {
            // error reading value
            console.log('Hubo un error')
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return [JSON.stringify(userToken), JSON.stringify(userEmail)]
}