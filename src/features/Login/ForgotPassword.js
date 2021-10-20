import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <>
            <View style={{paddingTop: 16, paddingLeft: 16}}>
                <Text style={{fontSize: 24, fontWeight: '700', lineHeight: 31}}>Forgot password</Text>

                <View style={{paddingTop: 16, width: '75%'}}>
                    <Text style={{fontSize: 17, lineHeight: 22}}>A link to create a new password will be sent to your contact number.</Text>
                </View>
            </View>

            <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => {
                        navigation.navigate('createPassword');
                    }}>
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <>
                        <View style={{paddingTop: 48}}>
                            <TextInput
                                style={{height:44, backgroundColor: '#fff', paddingLeft: 16}}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                />
                        </View>
                        <View style={{paddingTop: 24, alignItems: 'center'}}>
                            <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#00815D', height: 40, width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                                <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    )}
                </Formik>
            </>
    )
};

export default ForgotPasswordScreen;