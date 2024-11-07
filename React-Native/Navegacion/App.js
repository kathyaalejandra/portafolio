import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['black', '#d51985']} 
        style={styles.background}
      >
        <Image 
          source={require('./assets/portada.png')} 
          style={styles.image} 
        />

        <Text style={styles.text}>Panamera</Text>
        <Text style={styles.subtitulo}>Standly</Text>

        <Ionicons name="heart" size={32} color="red" style={styles.heartIcon} />

        <View style={styles.controls}>
          <FontAwesome name="backward" size={32} color="black" />
          <FontAwesome name="play" size={32} color="black" />
          <FontAwesome name="forward" size={32} color="black" />
        </View>

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
    width: 250,  
    height: 250, 
    resizeMode: 'contain', 
    marginBottom: 20,
    borderRadius: 20,
    marginTop: -80,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 3,
  },
  subtitulo: {
    fontSize: 15,
    color: 'black',
  },
  heartIcon: {
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',           //Fila horizontal
    justifyContent: 'space-between', // Espacio entre íconos
    width: 150,                      
    marginTop: 35,                   
  },
});