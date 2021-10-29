import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

const DashboardScreen = ({navigation}) => {
  const recentLeaveCard = () => {
    return (
      <View style={{paddingTop: 16}}>
        <View
          style={{
            height: 160,
            backgroundColor: 'rgba(0, 176, 0, 0.1)',
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
                source={require('./assets/avatar.png')}>
                <Text style={{color: '#fff'}}>ICO</Text>
              </ImageBackground>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={{marginRight: 16}}>
                <Image source={require('./assets/comment.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/attachement.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingTop: 40}}>
            <Text style={{fontSize: 20, lineHeight: 24}}>Annual leave</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', paddingTop: 8}}>
            <Text style={{flex: 1}}>14 Dec 2021 - 03 Jan 2022</Text>
            <View
              style={{
                borderRadius: 4,
                borderColor: '#00B000',
                borderWidth: 1,
                padding: 5,
              }}>
              <Text>Approved</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

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

  const leaveBalanceCard = ({item, index}) => {
    return (
      <View style={{paddingTop: 16}}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 160,
            width: '100%',
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
                source={require('./assets/avatar2.png')}>
                <Text style={{color: '#fff'}}>ICO</Text>
              </ImageBackground>
            </View>
          </View>
          <View
            style={{
              paddingTop: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flex: 1, fontSize: 34, lineHeight: 40}}>
              {item.days}
            </Text>
            <Text style={{fontSize: 13}}>/Days</Text>
          </View>
          <View>
            <Text>{item.type}</Text>
          </View>
        </View>
      </View>
    );
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  let _carousel = {};

  return (
    <View style={{height: '100%', padding: 16}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            lineHeight: 31,
            fontWeight: '700',
            width: '50%',
          }}>
          {' '}
          Welcome back, John
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Image source={require('./assets/notification.png')} />
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 48}}>
        <Text style={{flex: 1, fontSize: 15}}>Recent leave requests</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Leave');
          }}>
          <Text style={{color: '#00815D'}}>View all</Text>
        </TouchableOpacity>
      </View>
      {recentLeaveCard()}
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 32}}>
        <Text style={{flex: 1, fontSize: 15}}>Leave balances</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Leave');
          }}>
          <Text style={{color: '#00815D'}}>View all</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={c => {
          _carousel = c;
        }}
        data={leaveBalanceData}
        renderItem={leaveBalanceCard}
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
        <FlatList
          data={DATA}
          renderItem={() => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                backgroundColor: 'white',
                padding: 16,
                borderRadius: 8,
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: 'rgba(47, 55, 65, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff'}}>PDF</Text>
                </View>
              </View>
              <View style={{flex: 2, flexDirection: 'column'}}>
                <Text>October 2021</Text>
                <Text style={{color: 'rgba(0, 0, 0, 0.38)'}}>24.2 MB</Text>
              </View>
              <View>
                <Text style={{color: 'rgba(0, 0, 0, 0.38)'}}>1h ago</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
