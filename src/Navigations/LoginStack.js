import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/Login/LoginScreen';
import ForgotPasswordScreen from '../features/Login/ForgotPassword';
import CreatePassword from '../features/Login/CreatePassword';

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreens() {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen
                name="LoginScreen" 
                component={LoginScreen}
                options={{ title: ''}}
            />
            <LoginStack.Screen
                name="forgotPassword" 
                component={ForgotPasswordScreen}
                options={{ title: '',  borderTopColor: "transparent" }}
            />
            <LoginStack.Screen
                name="createPassword" 
                component={CreatePassword}
                options={{ title: '',  borderTopColor: "transparent" }}
            />
        </LoginStack.Navigator>
    );
}