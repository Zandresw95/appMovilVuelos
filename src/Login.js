import { StatusBar } from 'expo-status-bar';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { TextInput } from 'react-native-web';

const Login=()=> {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState([]);
    const [login, setLogin] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={setUser}
                value={user}
                placeholder={"Usuario"}
            />
            <Input
                placeholder='Email'
                errorStyle={{ color: 'black' }}
                label='Ingrese email'
            />
            <Input placeholder="Clave" 
                label='Ingrese clave'
                secureTextEntry={true} 
            />
            <View style={styles.buttons}> 
                <Button color="secondary">Ingresar</Button>
                <Button color="warning">Registrarse</Button>
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
        flexDirection: 'column',
        gap: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login;