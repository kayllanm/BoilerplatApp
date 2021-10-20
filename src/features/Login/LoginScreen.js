import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik';

const LoginScreen = ({navigation}) => {

    return (
        <View>
            <Text style={{fontWeight: '700', fontSize: 24, lineHeight: 31}}>Sign in to ABC inc.</Text>

            <View>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}>
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
                        <View style={{paddingTop: 32}}>
                            <TextInput
                                style={{height:44, backgroundColor: '#fff', paddingLeft: 16}}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={true}
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
                <View style={{paddingTop: 32, alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} style={{width: '90%', justifyContent: 'center'}}>
                        <Text style={{color: '#00815D', fontSize: 16}}>forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 47, paddingLeft: 16, paddingRight: 16}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#E6EBED'}} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 32, alignSelf: 'center'}}>
                    <Text style={{fontSize: 13}}>Not registered? </Text>
                    <TouchableOpacity style={{backgroundColor: '#fff'}}>
                        <Text style={{color: '#00815D', fontSize: 13}}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default LoginScreen;