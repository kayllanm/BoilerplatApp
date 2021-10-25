import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

const SuccessScreen = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', paddingTop: 16, backgroundColor: '#fff', height: '100%'}}>
            <Text style={{fontSize: 24, lineHeight: 31, fontWeight: '700', textAlign: 'center', width: '70%'}}>Your password has been changed successfully</Text>
            <View style={{width: '77%', height: '60%', paddingTop: 70}}>
                <View style={{width: '100%', height: '80%'}}>
                    <ImageBackground source={require("./assets/Ellipse29.png")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{ width: '27%', height: '27%'}} source={require('./assets/Ellipse30.png')} />
                    </ImageBackground>
                </View>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('LoginScreen')}} style={{backgroundColor: '#00815D', height: 40, width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>Continue to Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SuccessScreen;