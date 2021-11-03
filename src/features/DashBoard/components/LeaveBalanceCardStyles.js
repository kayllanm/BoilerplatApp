import {StyleSheet} from 'react-native';

const fontColor = 'rgba(0, 0, 0, 0.65)';

const LeaveBalanceCardStyles = StyleSheet.create({
  LeaveBalanceCardContainer: {
    backgroundColor: '#fff',
    height: 72,
    width: '100%',
    borderRadius: 8,
    padding: 16,
  },
  leaveTypeStyle: {fontSize: 12, color: fontColor},
  LeaveDaysContainer: {flexDirection: 'row', alignItems: 'center'},
  LeaveDaysStyle: {
    flex: 1,
    fontSize: 24,
    lineHeight: 24,
    paddingTop: 8,
    color: fontColor,
  },
  LeaveDaysTitle: {fontSize: 13, color: fontColor},
});

export default LeaveBalanceCardStyles;
