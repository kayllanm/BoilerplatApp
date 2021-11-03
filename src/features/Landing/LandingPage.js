import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import landingPageStyles from './LandingPageStyles';
import LandingPageConstants from './constants';
import Biometric from './assets/biometric.svg';

const LoginContainer = ({navigation}) => {
  const {
    landingpageContainer,
    landingPageHeader,
    landingPageSubHeader,
    landingPageBiometricText,
    submitbuttonContainer,
    submitButtonStyle,
    submitButtonText,
    borderWithTextContainer,
    borderlineStyle,
    borderText,
    secondaryButtonStyle,
    secondaryButtonText,
    lightgreyBorderContainer,
    lightgreyBorder,
    notRegisteredContainer,
    registerNowLink,
  } = landingPageStyles;
  const {header, subHeader} = LandingPageConstants;
  const [popupShowed, setPopupShowed] = useState(false);
  const handleFingerprintDismissed = () => {
    setPopupShowed(false);
  };

  const SigninWithBio = () => {
    FingerprintScanner.authenticate({
      description: 'Scan your fingerprint on the device scanner to continue',
    })
      .then(() => {
        navigation.navigate('Dashboard');
        handleFingerprintDismissed();
      })
      .catch(error => {
        handleFingerprintDismissed();
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={landingpageContainer}>
        <Text style={landingPageHeader}>{header}</Text>
        <Text style={landingPageSubHeader}>{subHeader}</Text>
        <View style={{paddingTop: 32}}>
          <Biometric width={120} height={80} />
        </View>
        <Text style={landingPageBiometricText}>
          Sign in using your fingerprint
        </Text>
        <View style={submitbuttonContainer}>
          <TouchableOpacity onPress={SigninWithBio} style={submitButtonStyle}>
            <Text style={submitButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={borderWithTextContainer}>
          <View style={borderlineStyle} />
          <View>
            <Text style={borderText}>or</Text>
          </View>
          <View style={borderlineStyle} />
        </View>
        <View style={submitbuttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={secondaryButtonStyle}>
            <Text style={secondaryButtonText}>Sign in with your email</Text>
          </TouchableOpacity>
        </View>
        <View style={lightgreyBorderContainer}>
          <View style={lightgreyBorder} />
        </View>
        <View style={notRegisteredContainer}>
          <Text style={{fontSize: 13}}>Not registered? </Text>
          <TouchableOpacity
            onPress={SigninWithBio}
            style={{backgroundColor: '#fff'}}>
            <Text style={registerNowLink}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginContainer;
