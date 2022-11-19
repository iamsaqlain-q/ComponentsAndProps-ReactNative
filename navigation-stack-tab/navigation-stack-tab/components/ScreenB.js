import {Button, TextInput, StyleSheet, View, Image } from 'react-native';
import PickInput from './PickInput'

export default function ScreenB() {
  return (
<View style={{marginBottom: 50}}>
<PickInput />
<View style={{width: 50, height: 50, alignSelf: 'center', marginBottom: 30}}>
<Button title='=' />
</View>
<PickInput />
</View>
  );
}

