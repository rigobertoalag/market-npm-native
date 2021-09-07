import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const products = [
    {
        id: 1,
        img: 'image.png',
        title: 'titulo 1',
        price: 100,
        description: 'lorem 1'
    },
    {
        id: 2,
        img: 'image.png',
        title: 'titulo 2',
        price: 150,
        description: 'lorem 2'
    },
    {
        id: 3,
        img: 'image.png',
        title: 'titulo 3',
        price: 200,
        description: 'lorem 3'
    },
    {
        id: 4,
        img: 'image.png',
        title: 'titulo 4',
        price: 250,
        description: 'lorem 4'
    },
    {
        id: 5,
        img: 'image.png',
        title: 'titulo 5',
        price: 300,
        description: 'lorem 5'
    },
    {
        id: 6,
        img: 'image.png',
        title: 'titulo 6',
        price: 350,
        description: 'lorem 6'
    }
]

export default function MainItems({ navigation }) {

    return (
        <>
            {
                products.map((p) =>
                    <TouchableHighlight
                        onPress={() => {
                            navigation.navigate('deatilitem', {
                                id: p.id,
                                img: p.img,
                                price: p.price,
                                title: p.title,
                                description: p.description
                            })
                        }}
                        underlayColor="white"
                        key={p.id}
                    >
                        <View style={styles.container}>
                            <View style={styles.img}>
                                <Text>{p.img}</Text>
                            </View>

                            <View style={styles.mb}>
                                <Text style={styles.mb}>{p.price}</Text>
                                <Text style={styles.mb}>{p.title}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 180, borderColor: 'grey', borderWidth: 2, margin: 5, alignSelf: 'center'
    },
    img: {
        height: 160, backgroundColor: 'grey'
    },
    mb: {
        marginBottom: 20
    }
})