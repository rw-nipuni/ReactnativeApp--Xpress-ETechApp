import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import TitleBar from '../constants/TitleBar';

export default class MyAccountScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TitleBar />
          <View style={styles.header}>
            <LinearGradient colors={['#9013fe', 'black']} style={styles.home} />
          </View>
          <Image
            style={styles.avatar}
            source={require('../assets/images/avt.jpg')}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Nipuni Udari</Text>
              <Text style={styles.info}>nipuniudari@gmail.com</Text>
              <Text style={styles.description}>No 45, pallegmama, Hungama.</Text>
              <Text style={styles.description}>0711064083</Text>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <Feather name="settings" size={25} color="white" />
                <Text
                  style={{
                    fontFamily: 'Nunito-Regular',
                    fontSize: 18,
                    marginLeft: 10,
                    color: 'white',
                  }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() => {
                  this.props.navigation.navigate('HomeScreen');
                }}>
                <Feather name="log-out" size={25} color="white" />
                <Text
                  style={{
                    fontFamily: 'Nunito-Regular',
                    fontSize: 18,
                    marginLeft: 10,
                    color: 'white',
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({

  home: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 110,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    backgroundColor: 'black',
    height: 500,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#188168',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#9013fe',
  },
  buttonContainer2: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#43dff7',
  },
});
