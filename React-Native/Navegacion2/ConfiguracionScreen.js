import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConfiguracionScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 35,
        color: 'black',
    }
});