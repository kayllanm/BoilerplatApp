import {StyleSheet} from 'react-native';

const LeaveTypeCardStyles = StyleSheet.create({
  CardContainer: {
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
  },
  ImageBackgroundStyle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconsContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  LeaveTypeTextStyle: {fontSize: 20, lineHeight: 24},
  LeavePeriodDateStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 8,
  },
  LeaveStatusContainer: {
    borderRadius: 24,
    padding: 5,
  },
  LeaveDateText: {flex: 1, color: 'rgba(60, 60, 67, 0.6)', fontSize: 12},
  LeaveStatusText: {color: '#fff', fontSize: 11},
});

export default LeaveTypeCardStyles;
