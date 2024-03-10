import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginScreen'>
            <Stack.Screen name ='LoginScreen' component = {LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
