import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const categories = [
    {
        id: 1,
        title: "categoria 1"
    },
    {
        id: 2,
        title: "categoria 2"
    },
    {
        id: 3,
        title: "categoria 3"
    },
    {
        id: 4,
        title: "categoria 4"
    },
    {
        id: 5,
        title: "categoria 5"
    },
    {
        id: 6,
        title: "categoria 6"
    }
]

function Items({ text }) {
    return (
        <View style={styles.catCircle}>
            <View style={{ alignSelf: 'center' }}>
                <Text>Icon</Text>
            </View>
            <View style={{ position: 'absolute', bottom: -20, alignSelf: 'center' }}>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

export default function MainCategories() {
    return (
        <View style={{ height: '11%' }}>
            <ScrollView horizontal={true}>
                {
                    categories.map((c) => 
                        <Items key={c.id} text={c.title}/>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    catCircle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 10,
        alignSelf: 'center',
        backgroundColor: 'gray',
        marginBottom: 10
    }
})