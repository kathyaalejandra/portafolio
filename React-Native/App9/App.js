import React from 'react';
import { View, Linking, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

const App = () => {
  const openSpotify = (url) => {
    Linking.openURL(url);
  };

  const openInfoPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card 1 */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°1"
          subtitle="Género Musical: Reggaeton"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>J Balvin</Text>
          <Text style={styles.description}>
          José Álvaro Osorio Balvin, más conocido por su nombre artístico J Balvin, es un cantante, rapero y productor colombiano, reconocido como uno de los artistas latinos más exitosos del mundo          </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://industriamusical.com/wp-content/uploads/2022/09/J-Balvin.jpg' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/intl-es/artist/1vyhD5VmyZ7KMfW5gqLgo5')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://es.wikipedia.org/wiki/J_Balvin')}>Más Info</Button>
        </Card.Actions>
      </Card>

      {/* Card 2 */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°2"
          subtitle="Género Musical: Reggaeton"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>Karol G</Text>
          <Text style={styles.description}>
          Carolina Giraldo Navarro, conocida artísticamente como Karol G, es una cantante, compositora y empresaria colombiana.          </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1ia2qv.img?w=726&h=448&m=6&x=230&y=109&s=156&d=156' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/intl-es/artist/790FomKkXshlbRYZFtlgla')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://en.wikipedia.org/wiki/Karol_G')}>Más Info</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ff00dc',
    padding: 16,
    paddingTop: 20,
  },
  card: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: 300,
    marginHorizontal: 'auto'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
    textAlign: 'justify'
  },
  actions: {
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default App;