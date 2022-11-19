
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './components/ScreenA';
import BottomNav from './components/BottomNav';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator >
        <Stack.Screen 
          name="Icon"
          component={ScreenA}
        />
        <Stack.Screen 
          name="Measurements"
          component={BottomNav}
        />   
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;