//import { StatusBar } from 'expo-status-bar';
//import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { LoginService } from './services/LoginService'
import { GetVuelos } from './services/VueloService';

export const Login = ({ navigation }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState(null);
    const [login, setLogin] = useState(false);

    const loguear = async () => {
        let tmpUser = await LoginService(user, password, setUsuario);
        let vuelos = await GetVuelos();
        console.log("Usuaurio: ", tmpUser);
        setUsuario(tmpUser);
        // usuario != null ? navigation.navigate("ListadoVuelos", { user: usuario }):console.log("CARGANDO")
        navigation.navigate("ListadoVuelos", { user: tmpUser,vuelo:vuelos })
    }

    const registrar = () => {
        navigation.navigate("Register");
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Email'
                errorStyle={{ color: 'black' }}
                label='Ingrese email'
                value={user}
                onChangeText={setUser}
            />
            <Input placeholder="Clave"
                label='Ingrese clave'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttons}>
                <View style={styles.buttonContainer}>
                    <Button title="Ingresar" color="secondary" style={styles.button}
                        onPress={() => {
                            loguear();
                        }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Registrarse" color="warning" onPress={() => { registrar() }} />
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        marginRight: 10
    },
    buttonContainer: {
        margin: 20
    }
});