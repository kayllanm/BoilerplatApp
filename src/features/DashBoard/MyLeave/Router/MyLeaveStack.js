import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyLeave from '../MyLeave';
import MyLeaveDetails from '../MyLeaveDetails';

const Stack = createNativeStackNavigator();

export default function MyLeaveStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyLeave" component={MyLeave} />
            <Stack.Screen name="MyLeaveDetails" component={MyLeaveDetails} />
        </Stack.Navigator>
    )
};