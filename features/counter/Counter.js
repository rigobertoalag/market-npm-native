import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setToken } from './counterSlice'

export default function Counter() {
    const token = useSelector((state) => state.counter.utoken)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <Button
                title='Incrementar'
                onPress={() => dispatch(increment())}
            />

            <Text>{count}</Text>

            <Button
                title='Reducir'
                onPress={() => dispatch(decrement())}
            />

            <Button
                title='obtener token'
                onPress={() => dispatch(setToken())}
            />
            <Text>El token es: {token}</Text>
        </View>
    )
}