import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import TitleBar from '../../constants/TitleBar';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#9013fe', 'black']} style={styles.home} />
      <View style={{flex: 1}}>
        <TitleBar />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-start',
            alignItems: 'center',
            
          }}>
          <Text
            style={{
              fontSize: 27,
              color: colors.background,
              fontWeight: 'bold',
            }}>
            Discover The Electronic Stores
          </Text>
          <Text
            style={{
              fontSize: 26,
              color: colors.background,
              fontWeight: 'bold',
            }}>
            In Your Area
          </Text>
        </View>

        <View style={{flex: 4, justifyContent: 'center', height: 200}}>
          <Swiper autoplay={true}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/4.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide2}>
              <Image
                source={require('../../assets/images/2.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide3}>
              <Image
                source={require('../../assets/images/3.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide3}>
              <Image
                source={require('../../assets/images/5.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </Swiper>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 50}}>
          <View style={{marginHorizontal: 20, marginTop: 30}}>
            <Button
              title="SIGN IN"
              buttonStyle={parameters.styleButton}
              titleStyle={parameters.buttonTitle}
              onPress={() => navigation.navigate('SignInScreen')}
            />
          </View>
          <View style={{marginHorizontal: 20, marginTop: 30}}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  createButton: {
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 60,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
