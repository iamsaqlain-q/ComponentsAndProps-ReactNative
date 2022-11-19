import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Button } from 'react-native-paper';

const getTime = () => new Date().toLocaleTimeString();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, time: getTime() };
    console.log('constructor');
    this.increseCount = this.increseCount.bind(this);
  }

  increseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log('componentDidMount');
    //setInterval(() => this.setState({ time: getTime() }), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate : prev prop ');
     
  }

  render() {
    console.log('render count', this.state.count);

    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button onPress={this.increseCount}>Count {this.state.count}</Button>
        <Text>Time : {this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
