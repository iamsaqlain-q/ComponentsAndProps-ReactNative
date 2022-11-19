import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function BottomNav({TabScreenA}, {TabScreenB}) {
  
  return (
  <NavigationContainer  independent={true} >
      <Tab.Navigator style={styles.btmNav}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Tab_A') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Tab_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen  independent={true}
          name="Tab_A"
          component={TabScreenA}
          //options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen  independent={true}
          name="Tab_B"
          component={TabScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
 btmNav:{
   width: 300,
   borderRadius:5,
 }
})
