import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import Edit from './assets/edit.svg';
import Trash from './assets/trash.svg';

const windowWidth = Dimensions.get('window').width - 64;

const MyLeaveTypeDetails = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const listOfCommentsData = [
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

  const deleteConfirmationModal = () => {
    return (
      <Dialog
        visible={showModal}
        dialogTitle={
          <DialogTitle title="Are you sure you would like to cancel your leave application?" />
        }
        width={windowWidth}
        footer={
          <DialogFooter>
            <DialogButton
              text="Take me back"
              onPress={() => {
                setShowModal(false);
              }}
            />
            <DialogButton
              text="Yes, cancel"
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Dashboard');
              }}
            />
          </DialogFooter>
        }>
        <DialogContent>
          <Text>
            Cancelling your leave application cannot be undone. Your leave
            request will be deleted from the system.
          </Text>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.leaveTypeDetailsContainerStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.leaveTypeDetailsHeaderText}>
                Annual leave
              </Text>
              <Text>12 Dec 2021 - 03 Dec 2022</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setShowAlert(true)}>
                <Edit width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Trash width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.leaveTypeDetailsDataTableStyle}>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Leave type
              </Text>
              <Text>Annual</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Reference number
              </Text>
              <Text>E000001-T0004-N00015</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Start date
              </Text>
              <Text>14 Dec 2021</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                End date
              </Text>
              <Text>03 Jan 2022</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Units taken
              </Text>
              <Text>13</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Leave reason
              </Text>
              <Text>Holiday</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Takeon transaction
              </Text>
              <Text>Takeon transaction</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Date submitted
              </Text>
              <Text>01 Nov 2021</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Date approved
              </Text>
              <Text>Pending</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>
                Next approver
              </Text>
              <Text>Kate Black</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 16}}>
              <Text style={styles.leaveTypeDetailsTableTextStyle}>Status</Text>
              <Text>
                <View
                  style={{
                    borderRadius: 4,
                    borderColor: 'rgba(0, 68, 114, 1)',
                    borderWidth: 1,
                    padding: 5,
                  }}>
                  <Text style={{color: 'rgba(0, 68, 114, 1)'}}>Pending</Text>
                </View>
              </Text>
            </View>
          </View>
          <Text style={styles.leaveTypeDetailsCommentsHeadingStyle}>
            Comments
          </Text>

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
                  <View style={{paddingTop: 16, width: '90%'}}>
                    <Text>{comment.comment}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.leaveTypeDetailsCommentsHeadingStyle}>
            Attachments
          </Text>

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
      </ScrollView>
      <Dialog
        visible={showAlert}
        dialogTitle={
          <DialogTitle title="Are you sure you would like to edit your leave application?" />
        }
        width={windowWidth}
        footer={
          <DialogFooter>
            <DialogButton
              text="Cancel"
              onPress={() => {
                setShowAlert(false);
              }}
            />
            <DialogButton
              text="Yes, edit"
              onPress={() => {
                setShowAlert(false);
                navigation.navigate('LeaveEditNApply', {
                  hasData: true,
                });
              }}
            />
          </DialogFooter>
        }>
        <DialogContent>
          <Text>
            Editing your annual leave application will result in recalculating
            your leave duration
          </Text>
        </DialogContent>
      </Dialog>
      {deleteConfirmationModal()}
    </>
  );
};

const styles = StyleSheet.create({
  leaveTypeDetailsContainerStyle: {
    padding: 16,
  },
  leaveTypeDetailsHeaderText: {
    fontSize: 20,
    lineHeight: 31,
    fontWeight: '700',
  },
  leaveTypeDetailsDataTableStyle: {
    marginTop: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  leaveTypeDetailsTableTextStyle: {
    width: '50%',
    color: 'rgba(0, 0, 0, 0.65)',
  },
  leaveTypeDetailsCommentsHeadingStyle: {
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

export default MyLeaveTypeDetails;
