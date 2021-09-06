import React from 'react'
import { View, Text } from 'react-native'

const products = [
    {
        id: 1,
        img: 'image.png',
        title: 'titulo 1',
        price: 100
    },
    {
        id: 2,
        img: 'image.png',
        title: 'titulo 2',
        price: 150
    },
    {
        id: 3,
        img: 'image.png',
        title: 'titulo 3',
        price: 200
    },
    {
        id: 4,
        img: 'image.png',
        title: 'titulo 4',
        price: 250
    },
    {
        id: 5,
        img: 'image.png',
        title: 'titulo 5',
        price: 300
    },
    {
        id: 6,
        img: 'image.png',
        title: 'titulo 6',
        price: 350
    }
]

export default function MainItems() {
    return (
        <>
            {
                products.map((p) =>
                    <View style={{ width: 180, borderColor: 'grey', borderWidth: 2, margin: 5, alignSelf: 'center' }} key={p.id}>
                        <View style={{ height: 160, backgroundColor: 'grey' }}>
                            <Text>{p.img}</Text>
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ marginTop: 20 }}>{p.price}</Text>
                            <Text style={{ marginTop: 20 }}>{p.title}</Text>
                        </View>
                    </View>
                )
            }
        </>
    )
}