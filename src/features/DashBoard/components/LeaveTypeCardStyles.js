import {StyleSheet} from 'react-native';

const LeaveTypeCardStyles = StyleSheet.create({
  CardContainer: {
    height: 160,
    backgroundColor: 'rgba(0, 176, 0, 0.1)',
    borderRadius: 8,
    padding: 16,
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
    borderRadius: 4,
    borderColor: '#00B000',
    borderWidth: 1,
    padding: 5,
  },
});

export default LeaveTypeCardStyles;
