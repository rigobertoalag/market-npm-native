import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function MainCategories(){
    return(
        <View style={{  flexDirection: 'row',height: '15' }}>
            <ScrollView horizontal='true' style={{ marginLeft: '5', marginRight: '5'}}>
                <View style={{ backgroundColor: 'red', width: '20', height: '80',  borderRadius: '100' }}>
                    <Text>Categoria 1</Text>
                </View>
                <Text>Aqui van las categorias</Text>
                <Text>Aqui van las categorias</Text>
                <Text>Aqui van las categorias</Text>
            </ScrollView>
        </View>
    )
}