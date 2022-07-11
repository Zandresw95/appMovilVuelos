import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';

const Registrar=()=> {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Input
                placeholder='Nombres'
                label='Ingrese nombres'
                type='text'
            />
            <Input
                placeholder='Apellidos'
                label='Ingrese apellidos'
                type='text'
            />
            <Input
                placeholder='Cédula'
                label='Ingrese cédula'
                type='number'
            />
            <Input placeholder="Correo" 
                label='Ingrese correo'
                type="email" 
            />
            <Input placeholder="Clave" 
                label='Ingrese clave'
                type="password"
                secureTextEntry={true} 
            />
            <View style={styles.buttons}> 
                <Button color="secondary">Guardar</Button>
                <Button color="warning">Salir</Button>
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default Registrar;