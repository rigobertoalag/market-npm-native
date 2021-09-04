import React from 'react'
import { View, Text } from 'react-native'

export default function MainItems() {
    return (
        <View style={{ width: 190, borderColor: 'grey', borderWidth: 2, margin: 5, alignSelf: 'center'}}>
            {/*marginRight: 10, marginBottom:20*/}
            <View style={{ height: 160, backgroundColor: 'grey' }}>
                <Text>Aqui va la image del producto</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ marginTop: 20 }}>Precio del producto</Text>
                <Text style={{ marginTop: 20 }}>Titulo del producto</Text>
            </View>
        </View>
    )
}