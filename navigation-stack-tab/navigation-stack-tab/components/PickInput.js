import * as React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import {Picker} from '@react-native-community/picker'


export default function PickInput() {
  return (
<View style={styles.parent}>
<View>
  <Picker style={styles.pick}>
 <Picker.Item label='cm' value='cm'  />
 <Picker.Item label='m' value='m'  />
 <Picker.Item label='km' value='km'  />
 </Picker>
 </View>
 <View><TextInput style={styles.input} keyboardType='numeric' placeholder='0'/></View>
 </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1, 
    flexDirection: 'row',
    alignSelf: 'center'
  },
  pick: {
    width: 50,
    height: 30,
    borderWidth: 3,
    borderColor: '#7600bc',
    borderRadius: 10,
    marginRight: 10,

  },

  input: {
    width: 130,
    height: 30,
    borderWidth: 3,
    borderColor: '#7600bc',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50
  },
})