import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.loginHeaderTextStyle}>Sign in to ABC inc.</Text>
      <View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => navigation.navigate('Dashboard')}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <View style={{paddingTop: 48}}>
                <TextInput
                  style={styles.loginTextInputStyle}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View style={{paddingTop: 32}}>
                <TextInput
                  style={styles.loginTextInputStyle}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.loginSubmitButtonContainerStyle}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.loginSubmitButtonStyle}>
                  <Text style={styles.loginSubmitbuttonTextStyle}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
        <View style={styles.loginForgotPasswordLinkStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgotPassword')}
            style={styles.loginForgotPasswordButtonStyle}>
            <Text style={styles.loginForgotPasswordButtonTextStyle}>
              forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginLineBeforeTextContainerStyle}>
          <View style={styles.loginLineBeforeTextStyle} />
        </View>
        <View style={styles.loginNotRegisteredTextContainerStyle}>
          <Text style={{fontSize: 13}}>Not registered? </Text>
          <TouchableOpacity>
            <Text style={styles.loginNotRegisteredTextStyle}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginHeaderTextStyle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 31,
  },
  loginTextInputStyle: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 16,
  },
  loginSubmitButtonContainerStyle: {
    paddingTop: 24,
    alignItems: 'center',
  },
  loginSubmitButtonStyle: {
    backgroundColor: '#00815D',
    height: 40,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loginSubmitbuttonTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  loginForgotPasswordLinkStyle: {
    paddingTop: 32,
    alignSelf: 'center',
  },
  loginForgotPasswordButtonStyle: {
    width: '90%',
    justifyContent: 'center',
  },
  loginForgotPasswordButtonTextStyle: {
    color: '#00815D',
    fontSize: 16,
  },
  loginLineBeforeTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 47,
    paddingLeft: 16,
    paddingRight: 16,
  },
  loginLineBeforeTextStyle: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6EBED',
  },
  loginNotRegisteredTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    alignSelf: 'center',
  },
  loginNotRegisteredTextStyle: {
    color: '#00815D',
    fontSize: 13,
  },
});

export default LoginScreen;
