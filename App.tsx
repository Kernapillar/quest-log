// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/homepage'; // adjust the import path as needed
// import OtherPage from './src/screens/OtherPage'; // adjust the import path as needed

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen name="Other" component={OtherPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;