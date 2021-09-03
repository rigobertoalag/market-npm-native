import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import MainCategories from './categories/MainCategories';
import MainItems from './items/MainItems';

const Carousel = () => (
    <View style={{ backgroundColor: 'grey', height: 200 }}>
        <Text>aqui va el carousel</Text>
    </View>
)

export default function HomeScreen({ navigation }) {

    return (
        // <View styles={{  }}>
        <ScrollView style={{ marginVertical: 100, marginBottom: 0, marginTop:0 }}>

            {/* Carrusel */}
            <Carousel />

            {/* Se muestra la barra de categorias */}
            <MainCategories />

            {/* Se muestran los productos */}
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10, marginLeft:10 }}>
                <MainItems />
                <MainItems />
                <MainItems />
                <MainItems />
            </View>

        </ScrollView>
        // </View>
    );
}

const styles = StyleSheet.create({
    
})