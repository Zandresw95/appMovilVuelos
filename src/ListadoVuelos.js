import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Item } from './components/List';
import {GetVuelos} from './services/VueloService';
import { ListItem, Avatar, Icon } from '@rneui/themed'
export const ListadoVuelos = ({ route, navigation }) => {
    let userData = null;
    let vuelos = [];
    if (
        route != null &&
        route.params != null &&
        route.params.user != null
    ) {
        userData = route.params.user;
    }

    if (
        route != null &&
        route.params != null &&
        route.params.vuelo != null
    ) {
        vuelos = route.params.vuelo;
        console.log(vuelos)
    }
    const [usuario, setUsuario] = useState(userData)
    const [data, setData] = useState(vuelos)


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            ciudad_Destino: 'First Item',
            ciudad_Origen:'UIO',
            hora_Salida:'10',
            valor_Vuelo:'30'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            ciudad_Destino: 'Second Item',
            ciudad_Origen: 'UIO',
            hora_Salida: '10',
            valor_Vuelo: '30'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            ciudad_Destino: 'Third Item',
            ciudad_Origen: 'UIO',
            hora_Salida: '10',
            valor_Vuelo: '30'
        },
    ];

    // const renderItem = ({ item }) => (
    //     <Item origen={item.origen} destino={item.destino} hora={item.hora} valor={item.valor} />
    // );
    /*const Item = ({ origen,destino,hora }) => (
        
    );

    const renderItem = ({ item }) => (
        <Item origen={item.title} destino={""} hora={""}/>
        
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );*/
    const renderItem = ({ item }) => (
        <Item origen={item.ciudad_Origen} destino={item.ciudad_Destino} hora={item.hora_Salida} valor={item.valor_Vuelo} key={item.id} />
    );
    return (
        <View style={styles.container}>
            <Text> {usuario.nombres}</Text>
            <Text> {usuario.apellidos}</Text>
            <Text> {usuario.email}</Text>
            <Text> {usuario.id}</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    txt: {
        color: 'black',
    }
});
