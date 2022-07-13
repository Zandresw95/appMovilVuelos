//import { ListItem, Button, Card } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
export const Item = ({ origen, destino, hora, valor }) => {
    return (
        <View style={styles.item}>
            <Text>{origen + " -------- " + destino}</Text>
            <Text>{hora + " -------- " + valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 32,
    },
});