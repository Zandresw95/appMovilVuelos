import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";

export const LoadingOverlay = () => {
    let colorFondo = "rgba(255,255,255,0.3)";
    return (
        <Overlay
            isVisible={true}
            style={styles.overlay}
            backdropStyle={colorFondo}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#00C7B1" />
                <Text>Cargando</Text>
            </View>

        </Overlay>
    );
};

const styles = StyleSheet.create({
    overlay: {
        height: 150,
        width: "65%",
        backgroundColor: "white",
        borderRadius: 15,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '900',
        // textTransform: 'uppercase',
        marginTop: 30,
        fontSize: 15,
    },
});