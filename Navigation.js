
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import TaskListScreen from './TaskListScreen';
// import TaskDetailsScreen from './TaskDetailsScreen';
import LoginScreen from './Pages/Login'
import Home from './Pages/Home';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
     <Toast />
    </>
   
  );
};

export default Navigation;
