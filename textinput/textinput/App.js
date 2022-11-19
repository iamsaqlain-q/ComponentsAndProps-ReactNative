import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const App = () => {

  const [name, setName] = useState(''); //hook

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput //takes input
      value={name}
        style={styles.input}
        placeholder='e.g. John' 
        onChangeText={(value) => setName(value)} //prop
      />
      <Text style={styles.text}>
        Your name is: {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 7,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;