import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";

export const LoadingOverlay = () => {
    return (
        <Overlay isVisible={true}>
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#00C7B1" />
                <Text>Cargando</Text>
            </View>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }
});