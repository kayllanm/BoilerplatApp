import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import MyLeaveStyles from './MyLeaveStyles';
import LeaveTypeCard from '../components/LeaveTypeCard';

const MyLeave = ({navigation, route}) => {
  const {
    myLeaveContainerStyle,
    myLeaveHeaderTextStyle,
    myLeaveCardHeaderTextContainerStyle,
    myLeaveCardHeaderTextStyle,
    myLeaveLinkTextStyle,
    myLeaveCardText,
    myLeaveCardContainerStyle,
    headerContainer,
  } = MyLeaveStyles;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = index => {
    setSelectedIndex(index);
  };

  const leaveBalnceData = [
    {
      id: '1',
      title: 'Annual leave',
      Available: '4.0000',
      Pending: '0.0000',
    },
    {
      id: '2',
      title: 'Sick Leave',
      Available: '30.0000',
      Pending: '0.0000',
    },
    {
      id: '3',
      title: 'Family Responsibility Leave',
      Available: '7.0000',
      Pending: '2.0000',
    },
    {
      id: '4',
      title: 'Maternity Leave',
      Available: '4.0000',
      Pending: '0.0000',
    },
    {
      id: '5',
      title: 'Paternity Leave',
      Available: '4.0000',
      Pending: '0.0000',
    },
  ];

  const leaveBalanceCard = item => {
    return (
      <View>
        <View style={myLeaveCardHeaderTextContainerStyle}>
          <Text style={myLeaveCardHeaderTextStyle}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyLeaveDetails');
            }}>
            <Text style={myLeaveLinkTextStyle}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={myLeaveCardContainerStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <Text style={myLeaveCardText}>Available</Text>
            </View>
            <View>
              <Text style={myLeaveCardText}>Pending</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 50}}>
            <View style={{width: '50%'}}>
              <Text style={{fontSize: 28}}>{item.Available}</Text>
            </View>
            <View>
              <Text style={{fontSize: 28}}>{item.Pending}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 8}}>
            <View style={{width: '50%'}}>
              <Text style={myLeaveCardText}>/Days</Text>
            </View>
            <View>
              <Text style={myLeaveCardText}>/Days</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const leaveBalanceSegment = () => {
    return (
      <ScrollView>
        {leaveBalnceData.map(leaveBalance => leaveBalanceCard(leaveBalance))}
      </ScrollView>
    );
  };

  const leaveRequestData = [
    {
      id: '1',
      leaveType: 'Sick leave',
      date: '03 Jul 2021 - 04 Jul 2021',
      status: 'Approved',
      hasComment: false,
      hasAttachement: false,
    },
    {
      id: '2',
      leaveType: 'Annual leave',
      date: '17 Apr 2021 - 19 Apr 2021',
      status: 'Rejected',
      hasComment: true,
      hasAttachement: true,
    },
    {
      id: '3',
      leaveType: 'Family responsibilty leave',
      date: '12 Mar 2021 - 13 Mar 2021',
      status: 'Approved',
      hasComment: false,
      hasAttachement: false,
    },
  ];

  const leaveRequestSegment = () => {
    const recentLeaveRequest = {
      id: '0',
      leaveType: 'Annual leave',
      date: '14 Dec 2021 - 03 Jan 2022',
      status: 'Pending',
      hasComment: false,
      hasAttachement: false,
    };
    const goToLeaveDetails = () => {
      navigation.navigate('MyLeaveTypeDetails');
    };

    return (
      <ScrollView>
        <View style={headerContainer}>
          <Text style={{flex: 1, fontSize: 15}}>Recent leave requests</Text>
        </View>
        <LeaveTypeCard
          leaveItem={recentLeaveRequest}
          onPress={goToLeaveDetails}
        />
        <View style={headerContainer}>
          <Text style={{flex: 1, fontSize: 15}}>All leave requests</Text>
        </View>
        {leaveRequestData.map(leaveRequest => (
          <LeaveTypeCard leaveItem={leaveRequest} onPress={goToLeaveDetails} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={myLeaveContainerStyle}>
      <Text style={myLeaveHeaderTextStyle}>My leave</Text>
      <SegmentedControlTab
        values={['Leave request', 'Leave balance']}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
        tabStyle={{borderColor: 'rgba(229, 234, 236, 1)'}}
        tabTextStyle={{color: 'rgba(0, 129, 93, 1)'}}
        activeTabStyle={{backgroundColor: 'rgba(229, 234, 236, 1)'}}
        activeTabTextStyle={{color: '#000'}}
      />
      {selectedIndex === 0 && leaveRequestSegment()}
      {selectedIndex === 1 && leaveBalanceSegment()}
    </View>
  );
};

export default MyLeave;
