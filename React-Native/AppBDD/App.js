//App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { doc, getDoc} from 'firebase/firestore';
import { db } from './firebaseconfig';

function ProfileScreen() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const docRef = doc(db, 'users', 'userProfile');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserName(docSnap.data().nombre);
        } else {
          console.log('No se encontró el documento');
        }
      } catch (error) {
        console.error( 'Error al obtener el nombre del usuario:', error);
      }
    };

    fetchUserName();
  },[]);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Perfil</Text>
      <Text style={styles.userNameText}>Nombre: {userName || 'Cargando...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  userNameText: {
    fontSize: 14,
    color: 'black',
  },
});
export default ProfileScreen;