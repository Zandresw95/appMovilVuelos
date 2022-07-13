import { ListItem, Button, Card } from "react-native-elements";
import { StyleSheet, Text, View } from 'react-native';
export const Item = ({ origen, destino, hora, valor }) => {
    return (

        < View style={{backgroundColor: 'red'}}>
            <Card containerStyle={{ padding: 0, width: '100%' }}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{origen + " -- " + destino}</ListItem.Title>
                        <ListItem.Subtitle>{hora + " ---- " + valor}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </Card>
        </View >


    );
}
{/*<ListItem.Swipeable
            rightContent={(reset) => (
                <Button
                    title="Comprar"
                    onPress={() => reset()}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                />
            )}
        >
            <ListItem.Content>
                <ListItem.Title>ORIGEN: {origen} DESTINO: {destino}</ListItem.Title>
                <ListItem.Subtitle>HORA: {hora} VALOR: {valor}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem.Swipeable>
    <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    
    */}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});