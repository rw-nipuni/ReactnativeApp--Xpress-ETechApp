import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors, parameters, title} from '../global/styles';
import MyOrdersScreen from './MyOrdersScreen';
import TitleBar from '../constants/TitleBar';
import SuccessMsgScreen from '../screens/SuccessMsgScreen';

export default class PaymentScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.header}>
            <TitleBar />
            <View style={styles.wraplogo}>
              <Image
                style={styles.logo}
                source={require('../assets/images/Card.jpg')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View
              style={{
                backgroundColor: '#F8F8F8',
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.payment}>TOTAL PAYMENT</Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 90,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.total}>LKR 2569.00</Text>
            </View>
            <View style={styles.view17}>
              <TouchableOpacity
                style={styles.buttonContainer2}
                onPress={() => {
                  this.props.navigation.navigate('SuccessMsgScreen');
                }}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Regular',
                    fontSize: 18,
                    marginLeft: 10,
                    color: 'white',
                  }}>
                  Confirm Payment
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
  root: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  buttonContainer2: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#9013fe',
    marginLeft: 40,
  },
  view17: {
    marginVertical: 10,
    marginTop: 30,
    marginHorizontal: 50,
  },
  logo: {
    width: '100%',
    height: 500,
  },
  search: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    height: 50,
    paddingLeft: 60,
    paddingRight: 14,
    backgroundColor: '#fff',
  },
  iconsearch: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 15,
    left: 20,
  },
  header: {
    backgroundColor: '#188168',
  },
  wrapsearch: {marginHorizontal: 30},
  payment: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  total: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#075E54',
  },
  createButton: {
    borderWidth: 1,
    borderColor: colors.black,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 60,
    marginBottom: 20,
  },

  createButtonTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
