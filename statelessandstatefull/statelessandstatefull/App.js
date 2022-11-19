import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {sell : 'Books'};
// }
//     render(){
//       return <View style={{ flex: 1,justifyContent: "center", alignItems: "center"}}><Text>Here are {this.state.sell} from the store</Text></View>
//     }
// }

class App extends React.Component{
 constructor(props){
    super(props)
    this.state = {day : 'Friday'};
}
  render(){
    return <View style={{ flex: 1,justifyContent: "center", alignItems: "center"}}>
    <Text>Today is {this.state.day}</Text>
    </View>
  }
}

export default App