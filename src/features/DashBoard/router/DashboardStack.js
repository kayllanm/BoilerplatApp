import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard';
import MyLeaveStack from '../MyLeave/Router/MyLeaveStack';
import Grid from '../assets/grid.svg';
import Calendar from '../assets/calendar.svg';
import Create from '../assets/create.svg';
import File from '../assets/file.svg';
import User from '../assets/user.svg';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Grid width={25} height={25} />,
          tabBarIconStyle: {marginTop: 16},
        }}
      />
      <Tab.Screen
        name="Leave"
        component={MyLeaveStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Calendar width={25} height={25} />,
          tabBarIconStyle: {marginTop: 16},
        }}
      />
      <Tab.Screen
        name="newLeave"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Create width={32} height={32} />,
          tabBarIconStyle: {marginTop: 16},
        }}
      />
      <Tab.Screen
        name="payslip"
        component={MyLeaveStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <File width={25} height={25} />,
          tabBarIconStyle: {marginTop: 16},
        }}
      />
      <Tab.Screen
        name="profile"
        component={MyLeaveStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <User width={25} height={25} />,
          tabBarIconStyle: {marginTop: 16},
        }}
      />
    </Tab.Navigator>
  );
}
