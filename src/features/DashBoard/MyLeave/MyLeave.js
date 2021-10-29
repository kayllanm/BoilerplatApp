import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const MyLeave = ({navigation}) => {
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

  const leaveBalanceCard = ({item}) => {
    return (
      <View>
        <View style={styles.myLeaveCardHeaderTextContainerStyle}>
          <Text style={styles.myLeaveCardHeaderTextStyle}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyLeaveDetails');
            }}>
            <Text style={styles.myLeaveLinkTextStyle}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myLeaveCardContainerStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <Text style={styles.myLeaveCardText}>Available</Text>
            </View>
            <View>
              <Text style={styles.myLeaveCardText}>Pending</Text>
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
              <Text style={styles.myLeaveCardText}>/Days</Text>
            </View>
            <View>
              <Text style={styles.myLeaveCardText}>/Days</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const leaveBalanceSegment = () => {
    return (
      <View>
        <FlatList
          data={leaveBalnceData}
          renderItem={leaveBalanceCard}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 120}}
        />
      </View>
    );
  };

  const leaveRequestCard = ({item}) => {
    let colors = {
      containerBackgroundcolor: 'rgba(0, 68, 114, 0.1)',
      statusContainer: 'rgba(0, 68, 114, 1)',
      statusText: 'rgba(0, 68, 114, 1)',
    };

    if (item.status === 'Approved') {
      colors.containerBackgroundcolor = 'rgba(0, 176, 0, 0.1)';
      colors.statusContainer = 'rgba(0, 176, 0, 1)';
      colors.statusText = 'rgba(0, 176, 0, 1)';
    } else if (item.status === 'Rejected') {
      colors.containerBackgroundcolor = 'rgba(199, 56, 79, 0.1)';
      colors.statusContainer = 'rgba(199, 56, 79, 1)';
      colors.statusText = 'rgba(199, 56, 79, 1)';
    }
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MyLeaveTypeDetails')}>
        <View style={{paddingTop: 16}}>
          <View
            style={{
              height: 160,
              backgroundColor: colors.containerBackgroundcolor,
              borderRadius: 8,
              padding: 16,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <ImageBackground
                  style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('../assets/avatarWhite.png')}>
                  <Text>ICO</Text>
                </ImageBackground>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{marginRight: 16}}>
                  <Image source={require('../assets/comment.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../assets/attachement.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingTop: 40}}>
              <Text style={{fontSize: 20, lineHeight: 24}}>{item.title}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 8,
              }}>
              <Text style={{flex: 1}}>{item.dates}</Text>
              <View
                style={{
                  borderRadius: 4,
                  borderColor: colors.statusContainer,
                  borderWidth: 1,
                  padding: 5,
                }}>
                <Text style={{color: colors.statusText}}>{item.status}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const leaveRequestData = [
    {
      id: '1',
      title: 'Sick leave',
      dates: '03 Jul 2021 - 04 Jul 2021',
      status: 'Approved',
      hasComment: false,
      hasAttachement: false,
    },
    {
      id: '2',
      title: 'Annual leave',
      dates: '17 Apr 2021 - 19 Apr 2021',
      status: 'Rejected',
      hasComment: true,
      hasAttachement: true,
    },
    {
      id: '3',
      title: 'Family responsibilty leave',
      dates: '12 Mar 2021 - 13 Mar 2021',
      status: 'Approved',
      hasComment: false,
      hasAttachement: false,
    },
  ];

  const leaveRequestSegment = () => {
    const recentLeaveRequest = {
      item: {
        id: '0',
        title: 'Annual leave',
        dates: '14 Dec 2021 - 03 Jan 2022',
        status: 'Pending',
        hasComment: false,
        hasAttachement: false,
      },
    };

    return (
      <View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 48}}>
          <Text style={{flex: 1, fontSize: 15}}>Recent leave requests</Text>
        </View>
        {leaveRequestCard(recentLeaveRequest)}
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 48}}>
          <Text style={{flex: 1, fontSize: 15}}>All leave requests</Text>
        </View>
        <FlatList
          data={leaveRequestData}
          renderItem={leaveRequestCard}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 120}}
        />
      </View>
    );
  };

  return (
    <View style={styles.myLeaveContainerStyle}>
      <Text style={styles.myLeaveHeaderTextStyle}>My leave</Text>
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
const styles = StyleSheet.create({
  myLeaveContainerStyle: {
    padding: 16,
    backgroundColor: 'rgba(229, 229, 229, 0)',
  },
  myLeaveHeaderTextStyle: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
  },
  myLeaveCardHeaderTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
  },
  myLeaveCardHeaderTextStyle: {
    flex: 1,
    fontSize: 15,
  },
  myLeaveLinkTextStyle: {
    color: '#00815D',
  },
  myLeaveCardText: {
    color: 'rgba(0, 0, 0, 0.65)',
  },
  myLeaveCardContainerStyle: {
    backgroundColor: '#fff',
    height: 160,
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
});

export default MyLeave;
