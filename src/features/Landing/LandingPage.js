//flow
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const LoginContainer = ({ navigation }) => {
    const [popupShowed, setPopupShowed] = useState(false);
    const handleFingerprintDismissed = () => {
      setPopupShowed(false);
    };
  
    useEffect(() => {

    }, []);

    const SigninWithBio = () => {
      console.log(FingerprintScanner)
      FingerprintScanner
        .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
        .then(() => {
          console.log('Authenticated successfully');
          navigation.navigate('Dashboard');
          handleFingerprintDismissed();
        })
        .catch((error) => {
          console.log(error)
          handleFingerprintDismissed();
        });
    };

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 16}}>
            <Text style={{fontWeight: '700', fontSize: 24, lineHeight: 31}}>Sign in to ABC inc.</Text>
            <Text style={{fontSize: 17, lineHeight: 22, paddingTop: 16,  textAlign: 'center', width: '70%'}}>Sign in below using your fingerprint or your email and password</Text>
            <View style={{paddingTop: 32}}>
              <Image source={require('../../assets/finger_print.png')} />
            </View>
            <Text style={{fontSize: 13, lineHeight: 18, paddingTop: 32}}>Sign in using your fingerprint</Text>
            <View style={{paddingTop: 48, width: '100%', alignItems: 'center'}}>
              <TouchableOpacity onPress={SigninWithBio} style={{backgroundColor: '#00815D', height: 40, width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 47, paddingLeft: 16, paddingRight: 16}}>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              <View>
                <Text style={{width: 50, textAlign: 'center'}}>or</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View style={{paddingTop: 48, width: '100%', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
              }} style={{backgroundColor: '#fff', height: 40, width: '90%', alignItems: 'center', justifyContent: 'center', borderColor: '#00815D', borderWidth: 1, borderRadius: 8}}>
                <Text style={{color: '#00815D', fontSize: 16, fontWeight: '700'}}>Sign in with your email</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 47, paddingLeft: 16, paddingRight: 16}}>
              <View style={{flex: 1, height: 1, backgroundColor: '#E6EBED'}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 32}}>
              <Text style={{fontSize: 13}}>Not registered? </Text>
              <TouchableOpacity onPress={SigninWithBio} style={{backgroundColor: '#fff'}}>
                <Text style={{color: '#00815D', fontSize: 13}}>Register now</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
};

export default LoginContainer;