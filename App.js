import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux';
import store from './store'

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import DetailItem from './screens/items/DetailItem'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {

  const [userToken, setUserToken] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? (setUserToken(JSON.parse(jsonValue).token), setUserEmail(JSON.parse(jsonValue).email)) : console.log('Inicia sesion')
    } catch (e) {
      // error reading value
      console.log('Hubo un error')
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
      setUserToken('')
      setUserEmail('')
      navigation.navigate('Home')
    } catch (e) {
      // remove error
      console.log('Hubo un error')
    }
    console.log('Sesion cerrada')
  }

  useEffect(() => {
    getData();
  });

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar sesion" onPress={() => logout()} />
      </DrawerContentScrollView>
    );
  }

  function userLogged() {
    if (userToken) {
      return (
        <>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff'
            }}>

            <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
            <Drawer.Screen name="profile" component={HomeScreen} options={{ title: 'Perfil' }} />
          </Drawer.Navigator>
        </>
      )
    } else if (!userToken) {
      return (
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff'
          }}>

          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
          <Drawer.Screen name="login" component={Login} options={{ title: 'Inicia sesion' }} />
          <Drawer.Screen name="register" component={Register} options={{ title: 'Registrarse' }} />

        </Drawer.Navigator>

      )
    }
  }

  return userLogged()
}

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}