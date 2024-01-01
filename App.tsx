// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/homepage'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Quest Log" component={HomePage} />
        {/* <Stack.Screen name="Other" component={OtherPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;