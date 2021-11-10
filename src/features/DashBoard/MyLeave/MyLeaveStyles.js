import {StyleSheet} from 'react-native';

const MyLeaveStyles = StyleSheet.create({
  myLeaveContainerStyle: {
    padding: 16,
    backgroundColor: 'rgba(229, 229, 229, 0)',
  },
  myLeaveHeaderTextStyle: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
  },
  myLeaveCardHeaderTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
  },
  myLeaveCardHeaderTextStyle: {
    flex: 1,
    fontSize: 15,
  },
  myLeaveLinkTextStyle: {
    color: '#00815D',
  },
  myLeaveCardText: {
    color: 'rgba(0, 0, 0, 0.65)',
  },
  myLeaveCardContainerStyle: {
    backgroundColor: '#fff',
    height: 160,
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
  headerContainer: {flexDirection: 'row', alignItems: 'center', paddingTop: 48},
});

export default MyLeaveStyles;
