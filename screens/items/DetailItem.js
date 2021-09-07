import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'

export default function DetailItem({ route }) {

    const { id, img, price, title, description } = route.params;

    return (
        <ScrollView style={{ marginVertical: 100, marginBottom: 0, marginTop: 0 }}>
            <View style={{ flexDirection: 'column' }}>

                <Text style={styles.titles}>{title}</Text>

                <View style={{ backgroundColor: 'grey', height: 300 }}>
                    <Text>La img es: {img}</Text>
                </View>

                <Text style={styles.titles}>${price}</Text>

                <View style={styles.stockBtn}>
                    <Text style={{ color: 'white', fontSize: 15 }}>EN STOCK: 2   </Text>
                </View>

                <View style={styles.btns}>
                    <Button
                        title='Comprar ahora'
                        color='blue'
                    />
                </View>

                <View style={styles.btns}>
                    <Button
                        title='Añadir a la lista'
                        color='grey'
                    />
                </View>

                <View style={styles.separator}></View>

                <View>
                    <Text style={styles.titles}>Descripcion</Text>
                    <Text style={{ margin:10}}>{description}</Text>
                </View>

                <View style={styles.separator}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titles: {
        margin: 10, fontSize: 30
    },
    stockBtn: {
        height: 35, backgroundColor: 'grey', width: 350, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 5, marginBottom: 20, borderRadius: 5
    },
    btns: {
        width: 350, alignSelf: 'center', marginBottom: 10, borderRadius: 10
    },
    separator: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40,
        marginBottom: 40
    },
})