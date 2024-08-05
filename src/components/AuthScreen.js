import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
  handleGuestLogin,
}) => {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <Image source={{ url: 'https://example.com/banner.jpg' }} style={styles.bannerImage} />
      </View>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
          <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? 'Do not have an account?     Sign Up' : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={[styles.button, styles.guestButton]} onPress={handleGuestLogin}>
        <Text style={styles.buttonText}>Play as Guest</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  authContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontStyle: 'Nunito',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 1,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    marginVertical: 20,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    alignItems: 'center',
  },
  guestButton: {
    backgroundColor: '#F7C105',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  toggleText: {
    marginTop: 20,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default AuthScreen;
