import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import DetailItem from './screens/items/DetailItem'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  const [userToken, setUserToken] = useState()
  const [userEmail, setUserEmail] = useState()

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? (setUserToken(JSON.parse(jsonValue).token), setUserEmail(JSON.parse(jsonValue).email)) : console.log('Inicia sesion')
    } catch (e) {
      // error reading value
      console.log('Hubo un error')
    }
  }

  useEffect(() => {
    getData();
  });

  console.log('token router', userToken)

  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff'
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />

      {
        userToken ? <Drawer.Screen name="profile" component={HomeScreen} options={{ title: 'Mi perfil' }} />
          :
        <Drawer.Screen name="login" component={Login} options={{ title: 'Inicio de sesion' }} />
      // <Drawer.Screen name="register" component={Register} options={{ title: 'Registro' }} />
      }
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="deatilitem" component={DetailItem} options={{ title: 'Producto' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}