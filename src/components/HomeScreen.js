import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from '@ant-design/react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, Haya!</Text>
      <Text style={styles.pickround}>Pick Your Round!</Text>
      <View style={styles.buttonContainer}>
        {[3, 5, 7, 9].map((round) => (
          <Button key={round} style={styles.button}>
            {round}
          </Button>
          
        ))}
      </View>
      
      <button type='primary'> 
          <Text style={styles.buttonText}>start</Text>
        </button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e8ff',
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 400, // adjust these values based on your image size
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pickround:{ 
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    marginHorizontal: 10,
  },
});

export default App;