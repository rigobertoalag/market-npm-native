import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'

import MainCategories from './categories/MainCategories';
import MainItems from './items/MainItems';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function HomeScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View>

            {/* Carrousel */}
            <View style={{ backgroundColor: 'grey', height: '15%' }}>
                <Text>aqui va el carousel</Text>
            </View>

            {/* Se muestra la barra de categorias */}
            <MainCategories />

            <MainItems />

            {/* Lista de productos */}
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 80,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})