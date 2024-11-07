import React from 'react';
import { StyleSheet, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function MainScreen() {
  const navigation = useNavigation();

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
    {/* 
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
      */}
      <Pressable 
        style={({ pressed }) => [
          styles.iconButton, 
          { backgroundColor: pressed ? '#1A73E8' : '#4285F4' }
        ]} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image 
          source={require('./assets/google.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontSize: 16,
    color: 'black',
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