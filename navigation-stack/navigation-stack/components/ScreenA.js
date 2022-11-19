import { StyleSheet, View, Text, Pressable } from 'react-native';
export default function ScreenA({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('Measurements');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.appText}>
        Quantity Measurement App
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Start
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  appText:{
    width: '90%',
    textAlign:'center',
    margin:10,
    fontSize:30,
    fontWeight:'bold',


  }
})