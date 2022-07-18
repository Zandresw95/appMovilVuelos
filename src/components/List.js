import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Button, Divider, Icon } from '@rneui/themed';
import { comprarVuelo } from '../services/CompraService';
import { OverlayPeticion } from './Overlay';
import { useState } from 'react';

export const Item = ({ usuario, origen, destino, hora, valor, cod }) => {
    /*
                    leftContent={(reset) => (
                       <Button
                           title="Info"
                           onPress={() => reset()}
                           icon={{ name: 'info', color: 'white' }}
                           buttonStyle={{ minHeight: '100%' }}
                       />
                   )}
    */
   const [overlayActive,setOverlayActive]=useState(false)
    return (
        <View>
            <ListItem.Swipeable
                rightContent={() => (
                    <Button
                        title="Comprar"
                        onPress={() => {
                            setOverlayActive(true);
                            comprarVuelo(usuario, cod);
                        }}
                        icon={{ name: 'cart', type: 'evilicon', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'green' }}
                    />
                )}
            >
                <Icon name='sc-telegram' type='evilicon' color='#517fa4' />
                <ListItem.Content>
                    <ListItem.Title right={true}>
                        <Text>{origen + " -------- " + destino}</Text></ListItem.Title>
                    <ListItem.Subtitle><Text>{hora + " -------- " + valor}</Text></ListItem.Subtitle>
                </ListItem.Content>

            </ListItem.Swipeable>
            <Divider />
            <View>
                {overlayActive ? <OverlayPeticion /> : <View></View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7BDE2'
    },
    item: {
        width: '100%',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 32,
    },
});