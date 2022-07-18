import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { LoginService } from './services/LoginService'
import { LoadingOverlay } from './components/LoadingOverlay';
import { NotFoundOverlay } from './components/NotFoundOverlay';

export const Login = ({ navigation }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState(false);
    const [login, setLogin] = useState(false);

    let tmpUser = null;
    const loguear = async () => {
        tmpUser = await LoginService(user, password, setUsuario, setLogin);

        //tmpUser != null ? setLogin(false) : setUsuario(true)

        tmpUser != null ? navigation.navigate("ListadoVuelos", { user: tmpUser }) : null
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
                            setLogin(true);
                            loguear();
                        }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Registrarse" color="warning" onPress={() => { registrar() }} />
                </View>
            </View>
            <View>
                {login ?
                    <LoadingOverlay />
                    : usuario ?
                        <NotFoundOverlay /> : <View></View>}
            </View>

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
    },
});