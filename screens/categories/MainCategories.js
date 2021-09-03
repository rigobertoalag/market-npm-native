import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function MainCategories() {
    return (
        <View style={{ height: '15%', backgroundColor: 'blue' }}>
            <ScrollView horizontal={true} style={{padding: 10}}>
                <View style={{ backgroundColor: 'red', width: '15%', height: '80%', borderRadius: 100, alignSelf: 'center' }}>
                        <Text>Categoria 1</Text>
                    </View>
            </ScrollView>
        </View>
    )
}