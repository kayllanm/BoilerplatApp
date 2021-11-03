import {StyleSheet} from 'react-native';

const landingPageStyles = StyleSheet.create({
  landingpageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 32,
  },
  landingPageHeader: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 31,
  },
  landingPageSubHeader: {
    fontSize: 17,
    lineHeight: 22,
    paddingTop: 16,
    textAlign: 'center',
    width: '70%',
  },
  landingPageBiometricText: {fontSize: 13, lineHeight: 18, paddingTop: 32},
  submitbuttonContainer: {paddingTop: 48, width: '100%', alignItems: 'center'},
  submitButtonStyle: {
    backgroundColor: '#00815D',
    height: 40,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitButtonText: {color: '#fff', fontSize: 16, fontWeight: '700'},
  borderWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 47,
    paddingLeft: 16,
    paddingRight: 16,
  },
  borderlineStyle: {flex: 1, height: 1, backgroundColor: 'black'},
  borderText: {width: 50, textAlign: 'center'},
  secondaryButtonStyle: {
    backgroundColor: '#fff',
    height: 40,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00815D',
    borderWidth: 1,
    borderRadius: 8,
  },
  secondaryButtonText: {color: '#00815D', fontSize: 16, fontWeight: '700'},
  lightgreyBorderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 47,
    paddingLeft: 16,
    paddingRight: 16,
  },
  lightgreyBorder: {flex: 1, height: 1, backgroundColor: '#E6EBED'},
  notRegisteredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
  },
  registerNowLink: {color: '#00815D', fontSize: 13},
});

export default landingPageStyles;
