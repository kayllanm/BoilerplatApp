import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../features/DashBoard/DashboardScreen';
import HomeContainer from '../features/Home/HomeContainer';
import LoginStack from './LoginStack';
import LandingPage from '../features/Landing/LandingPage';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingPage}  />
           <Stack.Screen name="Dashboard" component={DashboardScreen} options={{title: '', headerBackTitle: 'Back'}}/>
           <Stack.Screen name="Login" component={LoginStack}  />
           <Stack.Screen name="Home" component={HomeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
} 