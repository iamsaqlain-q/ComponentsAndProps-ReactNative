import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const saveData = () => {
    let name = 'Saqlain';
    AsyncStorage.setItem('user', name);
    alert('Data saved!');
  }

  const displayData = async() => {
    try{
      let user = await AsyncStorage.getItem('user');
      alert(user);
    }
    catch(e){
      alert(e)
    }
  } 

  const clearData = () => {
    AsyncStorage.clear();
    alert('Data removed!')
  }

  return (
    <View style={styles.container}>
   <View  style={styles.pressable}> <Button title='Click To Save' onPress={saveData}>
    </Button></View>
     <View  style={styles.pressable}> <Button  title='Click To Display' onPress={displayData}>
    </Button></View>
     <View  style={styles.pressable}>  <Button  title='Click To Remove' onPress={clearData}>
    </Button></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },

  pressable: {
    marginTop:20,
    height: 30,
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    backgroundColor:'#f0f'
  }  
});
