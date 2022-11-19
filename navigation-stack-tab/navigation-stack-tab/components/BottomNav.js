import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, TextInput, View,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScreenB from '../components/ScreenB';

const Tab = createMaterialTopTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

export default function BottomNav({TabScreenA}, {TabScreenB}) {
  return (
  <NavigationContainer  independent={true} style={styles.navcontainer}>
     <Tab.Navigator
     
        screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 13, fontweight: 'bold', color: '#fff' },
        tabBarStyle: { width: 330,backgroundColor: '#7600bc' },
        })
        }
      >

        <Tab.Screen  
          name="Length"
          component={TabScreenA}
        />
        
        <Tab.Screen 
          name="Temparature"
          component={TabScreenB}
        />
        
      </Tab.Navigator>
      <ScreenB />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  navcontainer: {
    //height:200,
    backgroundColor:'#fff',
  },
})

