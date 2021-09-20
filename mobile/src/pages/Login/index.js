import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const nav = useNavigation();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post('/auth/authenticate', {
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setSenha('');
      nav.navigate('Home', {
        user: response.data.user,
        auth: true,
      });
    } catch (err) {
      Alert.alert('Invalid e-mail address or password!');
      console.log(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        Please, enter your credentials:
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#ddd"
      />

      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={password}
        placeholder="Password"
        placeholderTextColor="#ddd"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#a20" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Create Account"
          onPress={() => {
            nav.navigate('SignUp');
            setEmail('');
            setSenha('');
          }}
          color="#a20"
        />
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
  instructionText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
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
