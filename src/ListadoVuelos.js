import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListadoVuelos=()=> {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text>Prueba</Text>
            <StatusBar style="auto" />

        </View>
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

export default ListadoVuelos;