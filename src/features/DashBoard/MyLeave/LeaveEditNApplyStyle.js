import {StyleSheet} from 'react-native';

const LeaveEditNApplyStyles = StyleSheet.create({
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
  datePickerField: {height: 44, backgroundColor: '#fff', marginRight: 16},
  unitsField: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 16,
  },
  noCommentsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    height: 80,
    padding: 16,
    marginRight: 16,
  },
  userCommentContainer: {flexDirection: 'row', paddingTop: 26},
  commentdateText: {color: 'rgba(0, 0, 0, 0.65)'},
  commentTextAreaContainer: {paddingTop: 16, width: '90%', height: 160},
  commentTextArea: {
    height: 900,
    borderRadius: 8,
    paddingLeft: 16,
  },
});

export default LeaveEditNApplyStyles;
