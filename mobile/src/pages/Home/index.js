import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Home({route, navigation}) {
  const nav = useNavigation();
  const {user, auth} = route.params;
  function handleLogout(event) {
    try {
      nav.navigate('Login', {auth: false});
    } catch (err) {
      console.log(err);
    }
  }
  if (JSON.stringify(auth) !== 'true') {
    nav.navigate('Login', {auth: false});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.name}!</Text>
      <Text style={styles.loginText}>You are logged in!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#a20" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7954ff',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  loginText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: 150,
    marginTop: 10,
  },
});
