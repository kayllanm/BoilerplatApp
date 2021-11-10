import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from '../features/Login/router/LoginStack';
import LandingPage from '../features/Landing/LandingPage';
import DashboardStack from '../features/DashBoard/router/DashboardStack';
import Bell from '../assets/bell.svg';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={LandingPage}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            headerTitle: () => (
              <Text style={{color: 'rgba(0, 0, 0, 0.65)'}}>Dashboard</Text>
            ),
            headerStyle: {
              backgroundColor: 'rgba(229, 229, 229, 0.5)',
              shadowColor: 'transparent',
            },
            headerRight: () => (
              <TouchableOpacity>
                <Bell width={25} height={25} />
              </TouchableOpacity>
            ),
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="Login" component={LoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
