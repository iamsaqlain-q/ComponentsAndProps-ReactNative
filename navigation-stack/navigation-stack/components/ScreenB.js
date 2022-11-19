import {Button, TextInput, StyleSheet, View } from 'react-native';
import BottomNav from '../components/BottomNav'

export default function ScreenB() {
  return (
  <View style={styles.body}>
  <TextInput style={styles.input} keyboardType='numeric' placeholder='0'/>
  <View style={styles.button}><Button title='='></Button></View>
  <TextInput style={styles.input} keyboardType='numeric' placeholder='0'/>
  <BottomNav />
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 150,
    borderWidth: 3,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 50
  },
  button: {
    width:50,
    color: '#694fad',
  }
})

