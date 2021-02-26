import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {SignupSchema} from './validation';

const App = () => {
  const toastmess = () =>
    Alert.alert(
      'Thông Báo',
      'Bạn muốn xác nhận',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK nhé')},
      ],
      {cancelable: false},
    );

  return (
    <>
      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        {/* KeyboardAwareScrollView: tham khảo 
        https://github.com/APSL/react-native-keyboard-aware-scroll-view */}

        {/* Formik: xử lý lưu giá trị formi - tham khảo 
        https://formik.org/docs/guides/react-native */}

        {/* Đối với React-native cli thì tham khảo thư viện cho Formik như sau:
        https://www.positronx.io/react-native-build-validate-forms-with-formik-yup/ */}

        <KeyboardAwareScrollView extraScrollHeight={60} style={styles.content}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              emailAddress: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={styles.fromGroup}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}></TextInput>
                  {errors.firstName && touched.firstName ? (
                    <Text style={{color: 'red'}}>{errors.firstName}</Text>
                  ) : null}
                </View>

                <View style={styles.fromGroup}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}></TextInput>
                  {errors.lastName && touched.lastName ? (
                    <Text style={{color: 'red'}}>{errors.lastName}</Text>
                  ) : null}
                </View>

                <View style={styles.fromGroup}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}></TextInput>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <Text style={{color: 'red'}}>{errors.phoneNumber}</Text>
                  ) : null}
                </View>

                <View style={styles.fromGroup}>
                  <Text style={styles.label}>Email Address</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('emailAddress')}
                    onBlur={handleBlur('emailAddress')}
                    value={values.emailAddress}></TextInput>
                  {errors.emailAddress && touched.emailAddress ? (
                    <Text style={{color: 'red'}}>{errors.emailAddress}</Text>
                  ) : null}
                </View>

                <View style={styles.fromGroup}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}></TextInput>
                  {errors.password && touched.password ? (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  ) : null}
                </View>

                <View style={styles.fromGroup}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.inputText}
                    autoFocus={true}
                    placeholder=""
                    placeholderTextColor="#929292"
                    onChangeText={handleChange('passwordConfirm')}
                    onBlur={handleBlur('passwordConfirm')}
                    value={values.passwordConfirm}></TextInput>
                  {errors.passwordConfirm && touched.passwordConfirm ? (
                    <Text style={{color: 'red'}}>{errors.passwordConfirm}</Text>
                  ) : null}
                </View>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleSubmit();
                    toastmess();
                  }}>
                  <Text style={styles.buttonSubmit}>SUBMIT</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
    backgroundColor: '#f2f4f5',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  fromGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#7d7e79',
    fontSize: 16,
    marginLeft: 20,
  },
  inputText: {
    height: 45,
    backgroundColor: 'white',
    marginTop: 7,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#dadfe0',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#3498db',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSubmit: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
