import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';
import PayslipCard from '../components/PayslipCard';
import Edit from '../assets/edit.svg';
import Attachment from '../assets/paperclip.svg';
import Chevron from '../assets/chevron.svg';
import LeaveEditNApplyStyle from './LeaveEditNApplyStyle';

const LeaveEditNApply = ({
  navigation,
  create,
  leave,
  comments,
  attachements,
  leaveTypes,
  leaveReasons,
}) => {
  const {
    editLeaveContainerStyle,
    editLeaveHeaderTextStyle,
    fieldLabelStyle,
    CommentsHeadingStyle,
    commentCardStyle,
    datePickerField,
    unitsField,
    noCommentsContainer,
    userCommentContainer,
    commentdateText,
    commentTextAreaContainer,
    commentTextArea,
  } = LeaveEditNApplyStyle;
  const [date, setDate] = useState(leave?.startDate || new Date());
  const [endDate, setEndDate] = useState(leave?.endDate || new Date());
  const [open, setOpen] = useState(false);
  const [openEndCal, setOpenEndCal] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({headerShown: true});
    });

    return unsubscribe;
  }, [navigation]);

  const styling = {
    inputIOS: {
      fontSize: 16,
      borderRadius: 8,
      color: '#000',
      paddingLeft: 16,
      backgroundColor: '#fff',
      height: 44,
      width: '95%',
    },
    inputAndroid: {
      fontSize: 16,
      borderRadius: 8,
      color: '#000',
    },
  };

  const openFileDirectory = async () => {
    // get a list of files and directories in the main bundle
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      await FileViewer.open(res[0].uri);
    } catch (e) {
      // error
    }
  };

  return (
    <ScrollView>
      <View style={editLeaveContainerStyle}>
        <View style={{flexDirection: 'row'}}>
          <Text style={editLeaveHeaderTextStyle}>
            {create ? 'Apply for leave' : 'Edit leave'}
          </Text>
          <TouchableOpacity style={{paddingRight: 32}}>
            <Edit width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 32}}
            onPress={() => {
              openFileDirectory();
            }}>
            <Attachment width={24} height={24} />
          </TouchableOpacity>
        </View>
        {!create && <Text>12 Dec 2021 - 03 Dec 2022</Text>}

        <View style={{paddingTop: 48}}>
          <Text style={fieldLabelStyle}>Leave type</Text>
          <RNPickerSelect
            Icon={() => {
              return <Chevron width={16} height={16} />;
            }}
            style={{
              ...styling,
              iconContainer: {
                top: 17,
                right: 37,
              },
            }}
            placeholder={{label: 'Select item'}}
            onValueChange={value => console.log(value)}
            value={leave?.leaveType}
            items={leaveTypes}
          />
          <View style={{paddingTop: 24}}>
            <Text style={fieldLabelStyle}>Start date</Text>
            <TouchableOpacity
              style={datePickerField}
              onPress={() => {
                setOpen(true);
              }}>
              <Text style={{padding: 16}}>
                {moment(date).format('DD MMM YYYY')}
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          <View style={{paddingTop: 24}}>
            <Text style={fieldLabelStyle}>End date</Text>
            <TouchableOpacity
              style={datePickerField}
              onPress={() => {
                setOpenEndCal(true);
              }}>
              <Text style={{padding: 16}}>
                {moment(endDate).format('DD MMM YYYY')}
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={openEndCal}
              date={endDate}
              onConfirm={date => {
                setOpenEndCal(false);
                setEndDate(date);
              }}
              onCancel={() => {
                setOpenEndCal(false);
              }}
            />
          </View>
          <View style={{paddingTop: 24}}>
            <Text style={fieldLabelStyle}>Units taken</Text>
            <TextInput value={leave?.unitsTaken} style={unitsField} />
          </View>

          <Text style={[fieldLabelStyle, {paddingTop: 24}]}>Leave reason</Text>
          <RNPickerSelect
            Icon={() => {
              return <Chevron width={16} height={16} />;
            }}
            style={{
              ...styling,
              iconContainer: {
                top: 17,
                right: 37,
              },
            }}
            placeholder={{label: 'Select item'}}
            onValueChange={value => console.log(value)}
            value={leave?.leaveReason}
            items={leaveReasons}
          />

          <Text style={CommentsHeadingStyle}>Comments</Text>

          <View>
            {!comments && (
              <TouchableOpacity>
                <View style={noCommentsContainer}>
                  <View style={{width: '20%'}}>
                    <Edit width={24} height={24} />
                  </View>
                  <Text>Leave a comment</Text>
                </View>
              </TouchableOpacity>
            )}
            {comments?.map(comment => (
              <View style={commentCardStyle}>
                <View style={{width: '20%', padding: 16}}>
                  <Image source={require('../assets/avatar.png')} />
                </View>
                <View style={{width: '80%'}}>
                  <View style={userCommentContainer}>
                    <Text style={{width: '50%'}}>{comment.username}</Text>
                    <Text style={commentdateText}>{comment.date}</Text>
                  </View>
                  <View style={commentTextAreaContainer}>
                    <TextInput
                      multiline={true}
                      numberOfLines={10}
                      value={comment.comment}
                      editable
                      style={commentTextArea}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={CommentsHeadingStyle}>Attachments</Text>
          {!attachements && (
            <TouchableOpacity
              onPress={() => {
                openFileDirectory();
              }}>
              <View style={noCommentsContainer}>
                <View style={{width: '20%'}}>
                  <Attachment width={24} height={24} />
                </View>
                <Text>Add an attachement</Text>
              </View>
            </TouchableOpacity>
          )}
          {attachements?.map(attachment => (
            <PayslipCard
              item={{month: attachment.month, size: attachment.size}}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LeaveEditNApply;
