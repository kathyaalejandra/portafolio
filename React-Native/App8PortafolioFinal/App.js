import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#00ffd6', '#376f6a']} 
      style={styles.gradient}
    >
      <View style={styles.container}>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.grazia.fr/wp-content/uploads/grazia/2023/09/ariana_grande.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Ariana Grande</Text>
          <Text style={styles.subtitle}>Artista de Pop y R&B</Text>
          <Text style={styles.description}>
          Ariana Grande-Butera es una cantante, compositora, actriz y empresaria estadounidense. Comenzó su carrera musical en Broadway a los 15 años en el musical 13.          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.classic-music-vault.com/wp-content/uploads/2017/10/maxresdefault-36.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Coldplay</Text>
          <Text style={styles.subtitle}>Artista de Pop Rock</Text>
          <Text style={styles.description}>
          Coldplay es una banda británica de rock alternativo formada en Londres en 1997. Está integrada por Chris Martin, Jonny Buckland, Guy Berryman, Will Champion y Phil Harvey.          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    textAlign: 'justify'
  },
});