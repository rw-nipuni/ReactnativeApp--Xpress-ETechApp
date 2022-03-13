import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-elements/dist/helpers';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../../contexts/authContext';

export default function SignInScreen({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext);
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function signIn(data) {
    try {
      const {password, email} = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signIn(values);
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={styles.TextInput2}>
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={100}>
                  <Icon
                    name="lock"
                    iconStyle={{color: color.grey3}}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{width: '80%'}}
                  placeholder="Password"
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={100}>
                  <Icon
                    name="visibility-off"
                    iconStyle={{color: color.grey3}}
                    type="material"
                    style={{marginRight: 20}}
                  />
                </Animatable.View>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styleButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          {' '}
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text1}}> Not on Xpress E-Tech ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Create An Account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    paddingTop: 12,
  },

  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 3,
    paddingLeft: 12,
    alignItems: 'center',
  },

  SocialIcon: {
    borderRadius: 10,
    height: 50,
  },

  createButton: {
    borderWidth: 1,
    borderColor: '#9013fe',
    height: 40,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#9013fe',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
