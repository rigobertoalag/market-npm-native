import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'

// import MainCategories from './categories/MainCategories';

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
        <View style={{ height: '100' }}>
            <View style={{ height: '25', backgroundColor: 'grey' }}>
                <Text>aqui va el carousel</Text>
            </View>

            {/* <MainCategories /> */}

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