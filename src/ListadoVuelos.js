import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Item } from './components/List';
import axios from "axios";

export const ListadoVuelos = ({ route }) => {
    let userData = null;
    if (
        route != null &&
        route.params != null &&
        route.params.user != null
    ) {
        userData = route.params.user;
    }

    const [usuario, setUsuario] = useState(userData)
    // const [data, setData] = useState(vuelos)
    const [data, setData] = useState([])
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // obtengo los vuelos de la api
            const data = await axios.get('http://viajecitossa.somee.com/api/Vuelos');
            // guardo los vuelos
            const json = await data.data;

            // seteo la data con los vuelos
            setData(json);
        }

        // llamo a la funcion
        fetchData()
            // veo si hay algun error
            .catch(console.error);;
    }, [data])

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
