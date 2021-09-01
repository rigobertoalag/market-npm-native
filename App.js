import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  const [logged, isLogged] = useState(false)

  console.log(logged)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff'
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Bienvenido',
          headerRight: () => (
            logged ? 
            <Button
              onPress={() => {isLogged(false); alert('Cerraste sesion')}}
              title="Cerrar sesion"
              color="blue"
            />
            :
            <Button
              onPress={() => {isLogged(true); alert('Iniciaste sesion')}}
              title="Iniciar sesion"
              color="blue"
            />
          ),
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Inicio de sesion' }} />
        <Stack.Screen name="register" component={Register} options={{ title: 'Registro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
