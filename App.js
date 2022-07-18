import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
import { Login } from './src/Login';
import { ListadoVuelos } from './src/ListadoVuelos';
import { Registrar } from './src/Registrar'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Viajesito S.A' }} />
        <Stack.Screen name="ListadoVuelos" component={ListadoVuelos} options={{ title: 'Vuelos Disponibles' }} />
        <Stack.Screen name="Register" component={Registrar} options={{ title: 'Registro Usuarios' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


