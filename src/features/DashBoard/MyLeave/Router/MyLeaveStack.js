import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyLeave from '../MyLeave';
import MyLeaveDetails from '../MyLeaveDetails';
import MyLeaveTypeDetails from '../MyLeaveTypeDetails';
import LeaveEditNApplyContainer from '../LeaveEditNApplyContainer';
import Bell from '../../../../assets/bell.svg';

const Stack = createNativeStackNavigator();

export default function MyLeaveStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MyLeave">
      <Stack.Screen
        name="MyLeave"
        component={MyLeave}
        options={{
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
      <Stack.Screen name="MyLeaveDetails" component={MyLeaveDetails} />
      <Stack.Screen name="MyLeaveTypeDetails" component={MyLeaveTypeDetails} />
      <Stack.Screen
        name="LeaveEditNApply"
        component={LeaveEditNApplyContainer}
        options={{
          headerStyle: {
            backgroundColor: 'rgba(229, 229, 229, 0.5)',
            shadowColor: 'transparent',
          },
          headerRight: () => (
            <TouchableOpacity>
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
