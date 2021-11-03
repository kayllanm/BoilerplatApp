import React from 'react';
import {View, Text} from 'react-native';
import BlueAvatar from '../../../assets/blueAvatar.svg';
import LeaveBalanceCardStyles from './LeaveBalanceCardStyles';

const LeaveBalanceCard = ({item}) => {
  const {
    LeaveBalanceCardContainer,
    leaveTypeStyle,
    LeaveDaysStyle,
    LeaveDaysContainer,
    LeaveDaysTitle,
  } = LeaveBalanceCardStyles;
  return (
    <View style={{paddingTop: 16}}>
      <View style={LeaveBalanceCardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <BlueAvatar width={40} height={40} />
          </View>
          <View style={{flex: 2}}>
            <Text style={leaveTypeStyle}>{item.type}</Text>
            <View style={LeaveDaysContainer}>
              <Text style={LeaveDaysStyle}>{item.days}</Text>
              <Text style={LeaveDaysTitle}>/Days</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaveBalanceCard;
