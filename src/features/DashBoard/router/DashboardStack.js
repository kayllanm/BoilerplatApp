import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../DashboardScreen';
import MyLeaveStack from '../MyLeave/Router/MyLeaveStack';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Leave" component={MyLeaveStack} />
            <Tab.Screen name="newLeave" component={DashboardScreen} />
            <Tab.Screen name="payslip" component={MyLeaveStack} />
            <Tab.Screen name="profile" component={MyLeaveStack} />
        </Tab.Navigator>
    )
};