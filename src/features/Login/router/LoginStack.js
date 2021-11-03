import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import ForgotPasswordScreen from '../ForgotPassword';
import CreatePassword from '../CreatePassword';
import SuccessScreen from '../SuccessScreen';

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreens() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: ''}}
      />
      <LoginStack.Screen
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{title: '', borderTopColor: 'transparent'}}
      />
      <LoginStack.Screen
        name="createPassword"
        component={CreatePassword}
        options={{title: '', borderTopColor: 'transparent'}}
      />
      <LoginStack.Screen
        name="successScreen"
        component={SuccessScreen}
        options={{title: '', borderTopColor: 'transparent'}}
      />
    </LoginStack.Navigator>
  );
}
