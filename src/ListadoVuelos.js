import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Item } from './components/List';
import { GetVuelos } from './services/VueloService';
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
    const renderItem = ({ item }) => (
        <Item usuario={usuario.id} origen={item.ciudad_Origen} destino={item.ciudad_Destino} hora={item.hora_Salida} valor={item.valor_Vuelo} key={item.id} cod={item.id} />
    );

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    txt: {
        color: 'black',
    }
});
