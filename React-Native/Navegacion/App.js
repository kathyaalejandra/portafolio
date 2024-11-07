import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1c0312', '#e82394']} 
        style={styles.background}
      >
        <Image 
          source={require('./assets/portada.png')} 
          style={styles.image} 
        />

        <Text style={styles.text}>Panamera</Text>
        <Text style={styles.subtitulo}>Standly</Text>

        <TouchableOpacity onPress={toggleLike}>
          <Ionicons 
            name={liked ? "heart" : "heart-outline"} 
            size={32} 
            color={liked ? "red" : "black"} 
            style={styles.heartIcon} 
          />
        </TouchableOpacity>

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
    resizeMode: 'container', 
    marginBottom: 20,
    borderRadius: 15,
    marginTop: -80,    
    shadowColor: '#000',          
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15,  
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 35,
  },
});
