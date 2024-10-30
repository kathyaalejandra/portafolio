import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['white', '#22c1c3']}
      style={styles.background}
    >
      <Image 
        source={require('./assets/logomuni.png')} 
        style={styles.imageTop} 
      />

      <Text style={styles.text}>Municipalidad de Quinchao</Text>
      <Text style={styles.subtitulo}>Departamento de Medio Ambiente</Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Presiona aquí" 
          color="#6200EE" 
          onPress={() => Alert.alert("Alerta", "Has presionado el botón normal")}
        />
      </View>

      <TouchableHighlight 
        style={styles.customButton} 
        underlayColor="#4CAF50"
        onPress={() => Alert.alert("Alerta", "Has presionado el botón personalizado")}
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight>

      <Pressable 
        style={({ pressed }) => [
          styles.iconButton, 
          { backgroundColor: pressed ? '#1A73E8' : '#4285F4' }
        ]} 
        onPress={() => Alert.alert("¡Aviso!", "Has presionado el botón con imagen de Google")}
      >
        <Image 
          source={require('./assets/google.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageTop: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  customButton: {
    backgroundColor: '#8BC34A',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
