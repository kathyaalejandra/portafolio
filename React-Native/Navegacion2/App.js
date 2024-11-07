import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ConfiguracionScreen from './ConfiguracionScreen';

const Stack = createNativeStackNavigator();

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seleccione una opción</Text>
      
      <View style={styles.buttonContainer}>
        <View style={styles.iconButtonWrapper}>
          <Pressable 
            style={({ pressed }) => [
              styles.iconButton, 
              { backgroundColor: pressed ? '#e68a00' : '#FFA500' }
            ]} 
            onPress={() => navigation.navigate('Home')}
          >
            <FontAwesome name="home" size={44} color="white" />
          </Pressable>
          <Text style={styles.subtitulo}>Home</Text>
        </View>

        <View style={styles.iconButtonWrapper}>
          <Pressable 
            style={({ pressed }) => [
              styles.iconButton, 
              { backgroundColor: pressed ? '#007bbb' : '#00BFFF' }
            ]} 
            onPress={() => navigation.navigate('Configuracion')}
          >
            <FontAwesome name="cog" size={44} color="white" />
          </Pressable>
          <Text style={styles.subtitulo}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  iconButtonWrapper: {
    alignItems: 'center', 
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  subtitulo: {
    fontSize: 13,
    color: 'black',
    marginTop: 5,
  },
});
