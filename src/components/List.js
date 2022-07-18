import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Button, Divider, Icon } from '@rneui/themed';
import { comprarVuelo } from '../services/CompraService';

export const Item = ({ usuario, origen, destino, hora, valor, key, fnGoBack }) => {

    const comprarVuelo = () => {
        comprarVuelo(usuario,key,fnGoBack)
    }
    return (
        <View>
            <ListItem.Swipeable
                leftContent={(reset) => (
                    <Button
                        title="Info"
                        onPress={() => reset()}
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                )}
                rightContent={(reset) => (
                    <Button
                        title="Comprar"
                        onPress={() => reset()}
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
        </View>
    );
}
/*
<ListItem>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <Text>{origen + " -------- " + destino}</Text>
            <Text>{hora + " -------- " + valor}</Text>
        </View>

        <ListItem.Swipeable
  leftContent={(reset) => (
    <Button
      title="Info"
      onPress={() => reset()}
      icon={{ name: 'info', color: 'white' }}
      buttonStyle={{ minHeight: '100%' }}
    />
  )}
  rightContent={(reset) => (
    <Button
      title="Delete"
      onPress={() => reset()}
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  )}
>
  <Icon name="My Icon" />
  <ListItem.Content>
    <ListItem.Title>Hello Swiper</ListItem.Title>
  </ListItem.Content>
  <ListItem.Chevron />
</ListItem.Swipeable>
*/
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