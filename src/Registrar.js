//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { RegisterService } from './services/RegisterService'

export const Registrar = ({ navigation }) => {
    const [username, setUserName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passport, setPassport] = useState("");
    const [password, setPassword] = useState("");

    const registrarUsuario = () => {
        RegisterService(username, LastName, email, passport, password, canContinue)
    }
    let canContinue = () => {
        navigation.popToTop();
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Nombres'
                label='Ingrese nombres'
                type='text'
                value={username}
                onChangeText={(username) => setUserName(username)}
            />
            <Input
                placeholder='Apellidos'
                label='Ingrese apellidos'
                type='text'
                value={LastName}
                onChangeText={(lastname) => { setLastName(lastname) }}
            />
            <Input
                placeholder='Cédula'
                label='Ingrese cédula'
                type='number'
                value={passport}
                onChangeText={(cedula) => { setPassport(cedula) }}
            />
            <Input placeholder="Correo"
                label='Ingrese correo'
                type="email"
                value={email}
                onChangeText={(email) => { setEmail(email) }}
            />
            <Input placeholder="Clave"
                label='Ingrese clave'
                type="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => { setPassword(password) }}
            />
            <View style={styles.buttons}>
                <Button color="secondary"
                    onPress={() => {
                        registrarUsuario()
                    }}
                >Guardar</Button>

                <Button color="warning"
                    onPress={() => { canContinue() }}
                >Regresar</Button>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    }
});
