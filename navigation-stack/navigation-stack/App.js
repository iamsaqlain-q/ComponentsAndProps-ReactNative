
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator 
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen 
          name="Icon"
          component={ScreenA}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen 
          name="Measurements"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;