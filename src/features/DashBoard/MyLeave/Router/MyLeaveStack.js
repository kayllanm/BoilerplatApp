import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyLeave from '../MyLeave';
import MyLeaveDetails from '../MyLeaveDetails';
import MyLeaveTypeDetails from '../MyLeaveTypeDetails';
import MyLeaveEdit from '../MyLeaveEdit';

const Stack = createNativeStackNavigator();

export default function MyLeaveStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyLeave" component={MyLeave} />
      <Stack.Screen name="MyLeaveDetails" component={MyLeaveDetails} />
      <Stack.Screen name="MyLeaveTypeDetails" component={MyLeaveTypeDetails} />
      <Stack.Screen name="MyLeaveEdit" component={MyLeaveEdit} />
    </Stack.Navigator>
  );
}
