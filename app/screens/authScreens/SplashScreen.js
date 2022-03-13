import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters, title, fonts} from '../../global/styles';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/images/logo.png';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreens');
    }, 3500);
  });

  return (
    <View style={styles.container}>
      <Header />
      <Image source={Logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9013fe',
  },
  testStyle: {
    fontSize: 50,
    color: colors.grey3,
    fontFamily: fonts.android,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
