import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { styles } from './styles'

export default function Register({ navigation  }) {
    return (
        <View style={styles.container}>
            <Text style={styles.hero}>Ingresa tus datos</Text>

            <Text style={styles.label}>Correo</Text>
            <TextInput
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ingresa tu correo"
                keyboardType="email-address"
                style={styles.input}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ingresa tu contraseña"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.input}
            />

            <Text style={styles.label}>Repite la contraseña</Text>
            <TextInput
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Ingresa tu contraseña"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.input}
            />

            <View style={{ alignItems: 'center' }}>
                <Button
                    title='Entrar'
                />
            </View>

            <View style={styles.separator}></View>

            <View style={ styles.centerElements }>
                <Text style={ styles.adviseText }>¿Ya tienes cuenta?</Text>
                <Button 
                    title='Iniciar sesion'
                    onPress={() => navigation.navigate('login')}
                />
            </View>
        </View>
    )
}