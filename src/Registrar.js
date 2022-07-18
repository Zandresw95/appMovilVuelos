//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { RegisterService } from './services/RegisterService';
import { LoadingOverlay } from './components/LoadingOverlay';

export const Registrar = ({ navigation }) => {
    const [username, setUserName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passport, setPassport] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState(false);

    const registrarUsuario = () => {
        RegisterService(username, LastName, email, passport, password, canContinue,setActive)
    }
    let canContinue = () => {
        navigation.pop();
    }
    return (
        <ScrollView>

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
                    <View style={styles.buttonContainer}>
                        <Button color="secondary"
                            onPress={() => {
                                setActive(true)
                                registrarUsuario()
                            }}
                        >Guardar</Button>

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color="warning"
                            onPress={() => { canContinue() }}
                        >Regresar</Button>
                    </View>
                </View>
                <View>
                    {active?<LoadingOverlay/>:<View></View>}
                </View>
            </View>
        </ScrollView>
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
        marginBottom: 10
    },
    buttonContainer: {
        margin: 20
    },
});
