import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>¡Bienvenido a la segunda pantalla!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Corregido
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 30,
        color: '#333',
    }
});