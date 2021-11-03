import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LeaveTypeCardStyles from './LeaveTypeCardStyles';
import WhiteAvatar from '../../../assets/whiteAvatar.svg';
import Comment from '../../../assets/comment.svg';
import Attachment from '../../../assets/attachment.svg';

const LeaveTypeCard = ({leaveItem}) => {
  const {
    CardContainer,
    IconsContainer,
    LeaveTypeTextStyle,
    LeavePeriodDateStyle,
    LeaveStatusContainer,
  } = LeaveTypeCardStyles;
  return (
    <View style={{paddingTop: 16}}>
      <View style={CardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <WhiteAvatar width={40} height={40} />
          </View>

          <View style={IconsContainer}>
            <TouchableOpacity style={{marginRight: 16}}>
              <Comment width={14} height={14} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Attachment width={14} height={14} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingTop: 40}}>
          <Text style={LeaveTypeTextStyle}>{leaveItem.leaveType}</Text>
        </View>
        <View style={LeavePeriodDateStyle}>
          <Text style={{flex: 1}}>{leaveItem.date}</Text>
          <View style={LeaveStatusContainer}>
            <Text style={{color: '#00B000'}}>{leaveItem.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaveTypeCard;
