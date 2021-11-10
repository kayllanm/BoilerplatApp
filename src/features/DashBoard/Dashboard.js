import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dashboardStyles from './DashboardStyle';
import LeaveTypeCard from './components/LeaveTypeCard';
import LeaveBalanceCard from './components/LeaveBalanceCard';
import PayslipCard from './components/PayslipCard';

const {width} = Dimensions.get('window');

const DashboardScreen = ({navigation}) => {
  const {
    userGreetingContainer,
    userGreetingText,
    viewAllLeaveRequestContainer,
    recentLeaveHeader,
    carouselHeaderContainer,
    leaveBalanceText,
  } = dashboardStyles;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({headerShown: true});
    });

    return unsubscribe;
  }, [navigation]);

  const leaveBalanceData = [
    {
      days: '4',
      type: 'Annual leave days',
    },
    {
      days: '7',
      type: 'Family',
    },
    {
      days: '30',
      type: 'Sick leave',
    },
    {
      days: '4',
      type: 'Maternity Leave',
    },
    {
      days: '4',
      type: 'Paternity Leave',
    },
  ];

  const renderItem = ({item}) => {
    return <LeaveBalanceCard item={item} />;
  };

  const payslipsData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      month: 'October 2021',
      size: '24.2MB',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      month: 'September 2021',
      size: '22.2MB',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      month: 'August 2021',
      size: '19.5MB',
    },
  ];

  let _carousel = {};

  const LeaveObject = {
    leaveType: 'Annual leave',
    date: '14 Dec 2021 - 03 Jan 2022',
    status: 'Approved',
  };

  return (
    <ScrollView>
      <View style={{padding: 16}}>
        <View style={userGreetingContainer}>
          <Text style={userGreetingText}> Welcome back, John</Text>
        </View>
        <View style={viewAllLeaveRequestContainer}>
          <Text style={recentLeaveHeader}>Recent leave requests</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Leave', {
                screen: 'MyLeave',
                params: {selectedView: 0},
              });
            }}>
            <Text style={{color: '#00815D'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <LeaveTypeCard leaveItem={LeaveObject} />
        <View style={carouselHeaderContainer}>
          <Text style={leaveBalanceText}>Leave balances</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Leave', {
                screen: 'MyLeave',
                params: {selectedView: 1},
              });
            }}>
            <Text style={{color: '#00815D'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            _carousel = c;
          }}
          data={leaveBalanceData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width - 150}
          swipeThreshold={100}
          hasParallaxImages={true}
        />
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 32}}>
          <Text style={{flex: 1, fontSize: 15}}>Recent payslips</Text>
          <TouchableOpacity>
            <Text style={{color: '#00815D'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <View>
          {payslipsData.map(payslip => (
            <PayslipCard item={payslip} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
