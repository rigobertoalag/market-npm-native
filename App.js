import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  const [logged, isLogged] = useState(false)
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