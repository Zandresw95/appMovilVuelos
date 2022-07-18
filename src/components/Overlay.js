import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
export const OverlayPeticion = () => {
    const [visible, setVisible] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text style={styles.textPrimary}>Compra Registrada</Text>
                <Button
                    title="Aceptar"
                    onPress={toggleOverlay}
                />
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
});