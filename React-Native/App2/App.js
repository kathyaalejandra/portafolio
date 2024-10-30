import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', '#22c1c3']} 
        style={styles.background}
      >
        <Image 
          source={require('./assets/logomuni.png')} 
          style={styles.image} 
        />

        <Text style={styles.text}>Municipalidad de Quinchao</Text>
        <Text style={styles.subtitulo}>Departamento de Medio Ambiente</Text>

        <Image 
          source={{ uri: 'https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png' }} 
          style={styles.imageBottom}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,  
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20, // Espacio entre imagen y texto muni
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 5, // Espacio entre textos
  },
  imageBottom: {
    width: 200,  
    height: 200, 
    resizeMode: 'contain', 
    position: 'absolute', 
    bottom: 80, 
  },
  subtitulo: {
    fontSize: 15,
    color: 'black',
  }
});