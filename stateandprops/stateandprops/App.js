import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class GreetMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Child Component</Text>
        <Text>{this.props.day}</Text>
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: 'Saturday'};
  }

  render() { //rendering greetmsg
    return (
      <View>
        <Text>Parent Component</Text>
        <GreetMsg day={this.state.day} name={"Saqlain"} arr={[1, 2, 3]}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
