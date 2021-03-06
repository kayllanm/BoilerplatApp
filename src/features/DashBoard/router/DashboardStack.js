import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard';
import MyLeaveStack from '../MyLeave/Router/MyLeaveStack';
import LeaveEditNApplyContainer from '../MyLeave/LeaveEditNApplyContainer';
import Grid from '../assets/grid.svg';
import GridActive from '../assets/gridActive';
import Calendar from '../assets/calendar.svg';
import CalendarActive from '../assets/calendarActive.svg';
import Create from '../assets/create.svg';
import File from '../assets/file.svg';
import User from '../assets/user.svg';
import Bell from '../../../assets/bell.svg';

const Tab = createBottomTabNavigator();

export default function DashboardStack({navigation, options}) {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}
      backBehavior="firstRoute">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <GridActive width={25} height={25} />
            ) : (
              <Grid width={25} height={25} />
            );
          },
          tabBarIconStyle: {marginTop: 16},
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
      <Tab.Screen
        name="Leave"
        component={MyLeaveStack}
        options={{
          headerTitle: 'My Leave',
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <CalendarActive width={25} height={25} />
            ) : (
              <Calendar width={25} height={25} />
            );
          },
          tabBarIconStyle: {marginTop: 16},
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
      <Tab.Screen
        name="newLeave"
        component={LeaveEditNApplyContainer}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.setParams({
              hasData: false,
            });
          },
        })}
        options={{
          headerTitle: 'My Leave',
          tabBarLabel: '',
          tabBarIcon: () => <Create width={32} height={32} />,
          tabBarIconStyle: {marginTop: 16},
          headerStyle: {
            backgroundColor: 'rgba(229, 229, 229, 0.5)',
            shadowColor: 'transparent',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push('Dashboard')}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'rgba(0, 122, 255, 1)',
                  paddingRight: 8,
                }}>
                Done
              </Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.push('Dashboard')}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'rgba(0, 122, 255, 1)',
                  paddingLeft: 8,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          ),
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
