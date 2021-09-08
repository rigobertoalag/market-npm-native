import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function MainItems({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/v1/products');
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    console.log(data)

    // data.map((d) => console.log(d.attributes.title))

    return (
        <>
            {
                isLoading ? <Text style={{ fontSize: 50, alignSelf:'center', justifyContent:'center' }}>Cargando...</Text> :
                    data.map((pdt) =>
                        <TouchableHighlight
                            onPress={() => {
                                navigation.navigate('deatilitem', {
                                    id: pdt.id,
                                    img: 'test',
                                    price: pdt.attributes.price,
                                    title: pdt.attributes.title,
                                    description: 'test',
                                    quantity: pdt.attributes.quantity
                                })
                            }}
                            underlayColor="white"
                            key={pdt.id}
                        >
                            <View style={styles.container}>
                                <View style={styles.img}>
                                    <Text>Test</Text>
                                </View>

                                <View style={styles.mb}>
                                    <Text style={styles.mb}>{pdt.attributes.price}</Text>
                                    <Text style={styles.mb}>{pdt.attributes.title}</Text>
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