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
        style={({ pressed }) => ({ backgroundColor: pressed ? '#0f0' : '#7600bc', borderRadius : 7})}
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
    color: '##7600bc',
  },
  appText:{
    width: '90%',
    textAlign:'center',
    margin:10,
    fontSize:30,
    fontWeight:'bold',


  }
})