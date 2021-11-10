import {StyleSheet} from 'react-native';

const LeaveBalanceCardStyles = StyleSheet.create({
  LeaveBalanceCardContainer: {
    backgroundColor: 'rgba(47, 55, 65, 1)',
    height: 72,
    width: '100%',
    borderRadius: 8,
    padding: 16,
  },
  leaveTypeStyle: {fontSize: 12, color: '#fff'},
  LeaveDaysContainer: {flexDirection: 'row', alignItems: 'center'},
  LeaveDaysStyle: {
    fontSize: 24,
    lineHeight: 24,
    paddingTop: 8,
    paddingRight: 8,
    color: '#fff',
  },
  LeaveDaysTitle: {fontSize: 13, color: 'rgba(235, 235, 245, 0.6)'},
});

export default LeaveBalanceCardStyles;
