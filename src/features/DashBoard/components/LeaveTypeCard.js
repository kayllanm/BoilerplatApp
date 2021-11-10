import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LeaveTypeCardStyles from './LeaveTypeCardStyles';
import DarkAvatar from '../assets/darkAvatar.svg';
import Comment from '../../../assets/comment.svg';
import Attachment from '../../../assets/attachment.svg';

const LeaveTypeCard = ({leaveItem, onPress}) => {
  const {
    CardContainer,
    IconsContainer,
    LeaveTypeTextStyle,
    LeavePeriodDateStyle,
    LeaveStatusContainer,
    LeaveDateText,
    LeaveStatusText,
  } = LeaveTypeCardStyles;

  let colors = {
    borderLeftColor: 'rgba(51, 146, 211, 1)',
    backgroundColor: 'rgba(51, 146, 211, 1)',
  };

  if (leaveItem.status === 'Approved') {
    colors.borderLeftColor = 'rgba(0, 176, 0, 1)';
    colors.backgroundColor = 'rgba(0, 176, 0, 1)';
  } else if (leaveItem.status === 'Rejected') {
    colors.borderLeftColor = 'rgba(199, 56, 79, 1)';
    colors.backgroundColor = 'rgba(199, 56, 79, 1)';
  }

  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <View style={{paddingTop: 16}}>
        <View
          style={[CardContainer, {borderLeftColor: colors.borderLeftColor}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <DarkAvatar width={40} height={40} />
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
            <Text style={LeaveDateText}>{leaveItem.date}</Text>
            <View
              style={[
                LeaveStatusContainer,
                {backgroundColor: colors.backgroundColor},
              ]}>
              <Text style={LeaveStatusText}>{leaveItem.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LeaveTypeCard;
