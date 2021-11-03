import {StyleSheet} from 'react-native';

const dashboardStyles = StyleSheet.create({
  userGreetingContainer: {flexDirection: 'row'},
  userGreetingText: {
    flex: 1,
    fontSize: 20,
    lineHeight: 31,
    fontWeight: '700',
    width: '50%',
  },
  viewAllLeaveRequestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
  },
  recentLeaveHeader: {flex: 1, fontSize: 15},
  carouselHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
  },
  leaveBalanceText: {flex: 1, fontSize: 15},
  payslipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
  },
});

export default dashboardStyles;
