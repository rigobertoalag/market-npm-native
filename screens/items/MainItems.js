import React from 'react'
import { View, Text, Button } from 'react-native'

export default function MainItems(){
    return(
        <View style={{ borderColor: 'black', shadowColor: 'black', width: '50%'}}>
            <View style={{ height: '50%', backgroundColor: 'grey'}}>
                <Text>Aqui va la image del producto</Text>
            </View>
            <View>
                <Text>Titulo del producto</Text>
            </View>
            <View>
                <Text>Description del producto</Text>
            </View>
            <View>
                <Button>Ver mas..</Button>
                <View style={{ alignSelf: 'flex-end'}}>
                    <Text>Precio del producto</Text>
                </View>
            </View>
        </View>
    )
}