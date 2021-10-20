import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';

const CreatePassword = () => {
    return (
        <>
            <View style={{padding: 16}}>
                <Text style={{fontSize: 24, lineHeight: 31, fontWeight: '700'}}>Create your new password</Text>
                <Text style={{fontSize: 17, lineHeight: 22,}}>Please create your new password below.</Text>
            </View>
            <View>
            <Formik
                    initialValues={{ password: '', confirm: '' }}
                    onSubmit={values => console.log(values)}>
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <>
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
                                    <View style={{paddingTop: 32}}>
                                        <TextInput
                                            style={{height:44, backgroundColor: '#fff', paddingLeft: 16}}
                                            placeholder="Confirm"
                                            onChangeText={handleChange('Confirm')}
                                            onBlur={handleBlur('Confirm')}
                                            value={values.Confirm}
                                            secureTextEntry={true}
                                            />
                                    </View>
                                    <View style={{paddingTop: 24, alignItems: 'center'}}>
                                        <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#00815D', height: 40, width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                                            <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>Confirm and Sign in</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                    )}
                </Formik>
            </View>
        </>
    )
};

export default CreatePassword;