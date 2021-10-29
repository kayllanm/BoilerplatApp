import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';

const MyLeaveEdit = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openEndCal, setOpenEndCal] = useState(false);

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

  const listOfCommentsData = [
    {
      username: 'John Smith',
      date: '5m ago',
      comment:
        'This is an example of a comment left by an manager or approver on a Annual Leave Request.',
    },
    {
      username: 'Kate Black',
      date: '10m ago',
      comment:
        'This is an example of a comment left by a manager or approver on a Annual Leave Request. This is an example of a comment left by a manager or approver on a Annual Leave Request',
    },
    {
      username: 'John Smith',
      date: '1h ago',
      comment:
        'This is an example of a comment left by an manager or approver on a Annual Leave Request. This is an example of a comment left by a manager or approver on a Annual Leave Request',
    },
  ];

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
      <View style={styles.editLeaveContainerStyle}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.editLeaveHeaderTextStyle}>Edit leave</Text>
          <TouchableOpacity style={{paddingRight: 32}}>
            <Image source={require('../assets/edit-3.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 32}}
            onPress={() => {
              openFileDirectory();
            }}>
            <Image source={require('../assets/attachement.png')} />
          </TouchableOpacity>
        </View>

        <Text>12 Dec 2021 - 03 Dec 2022</Text>
        <View style={{paddingTop: 48}}>
          <Text style={styles.fieldLabelStyle}>Leave type</Text>
          <RNPickerSelect
            Icon={() => {
              return <Image source={require('../assets/Fill.png')} />;
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
            value={'Annual leave'}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
              {label: 'Annual leave', value: 'Annual leave'},
            ]}
          />
          <View style={{paddingTop: 24}}>
            <Text style={styles.fieldLabelStyle}>Start date</Text>
            <TouchableOpacity
              style={{height: 44, backgroundColor: '#fff', marginRight: 16}}
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
            <Text style={styles.fieldLabelStyle}>End date</Text>
            <TouchableOpacity
              style={{height: 44, backgroundColor: '#fff', marginRight: 16}}
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
            <Text style={styles.fieldLabelStyle}>Units taken</Text>
            <TextInput
              value="13.0000"
              style={{
                height: 44,
                backgroundColor: '#fff',
                borderRadius: 8,
                paddingLeft: 16,
              }}
            />
          </View>

          <Text style={[styles.fieldLabelStyle, {paddingTop: 24}]}>
            Leave reason
          </Text>
          <RNPickerSelect
            Icon={() => {
              return <Image source={require('../assets/Fill.png')} />;
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
            value={'Holiday'}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
              {label: 'Holiday', value: 'Holiday'},
            ]}
          />

          <Text style={styles.CommentsHeadingStyle}>Comments</Text>

          <View>
            {listOfCommentsData.map(comment => (
              <View style={styles.commentCardStyle}>
                <View style={{width: '20%', padding: 16}}>
                  <Image source={require('../assets/avatar.png')} />
                </View>
                <View style={{width: '80%'}}>
                  <View style={{flexDirection: 'row', paddingTop: 26}}>
                    <Text style={{width: '50%'}}>{comment.username}</Text>
                    <Text style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                      {comment.date}
                    </Text>
                  </View>
                  <View style={{paddingTop: 16, width: '90%', height: 160}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={10}
                      value={comment.comment}
                      editable
                      style={{
                        height: 900,
                        borderRadius: 8,
                        paddingLeft: 16,
                      }}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.CommentsHeadingStyle}>Attachments</Text>

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
              <Text>Attachment-1</Text>
              <Text style={{color: 'rgba(0, 0, 0, 0.38)'}}>24.2 MB</Text>
            </View>
            <View>
              <Text style={{color: 'rgba(0, 0, 0, 0.38)'}}>1h ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  editLeaveContainerStyle: {
    paddingTop: 21,
    paddingLeft: 16,
  },
  editLeaveHeaderTextStyle: {
    flex: 1,
    fontSize: 20,
    lineHeight: 31,
    fontWeight: '700',
  },
  fieldLabelStyle: {
    fontSize: 12,
    paddingBottom: 8,
  },
  CommentsHeadingStyle: {
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 32,
  },
  commentCardStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 172,
    marginTop: 16,
    borderRadius: 8,
  },
});

export default MyLeaveEdit;
