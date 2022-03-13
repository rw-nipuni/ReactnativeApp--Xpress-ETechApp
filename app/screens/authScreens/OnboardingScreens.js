import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slider1 from '../../assets/images/Slide1.png';
import Slider2 from '../../assets/images/Slide2.png';
import Slider3 from '../../assets/images/Slide3.png';
import {colors, parameters, title, fonts} from '../../global/styles';

import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Discover E-Stores near you',
    text: 'We make it simple to find your favorite E-gadgets.Enter your address and let us do the rest.',
    image: Slider1,
  },
  {
    key: 2,
    title: 'Order your favorites',
    text: 'We will your favorite devices based on your search and orders',
    image: Slider2,
  },
  {
    key: 3,
    title: 'Fastest Delivery',
    text: 'We make E-Gadgets ordering fast, easy and free.No matter you paid online or cash.',
    image: Slider3,
  },
];
function OnboardingScreens() {
  const navigation = useNavigation();
  const _onDone = () => {
    navigation.replace('SignInWelcomeScreen');
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageStyle} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.text}</Text>
      </View>
    );
  };

  const _nextbutton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.next}>Next</Text>
      </View>
    );
  };
  const _doneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.done}>Done</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        bottomButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderNextButton={_nextbutton}
        renderDoneButton={_doneButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    backgroundColor: colors.black,
  },

  activeDotStyle: {
    backgroundColor: colors.background,
    width: 25,
  },
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imageStyle: {
    height: '40%',
    width: '90%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.android.bold,
    fontSize: 30,
    color: colors.black,
  },

  desc: {
    fontFamily: fonts.android.regular,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    padding: 10,
  },
  button: {
    width: 150,
    backgroundColor: colors.buttons,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    alignSelf: 'center',
  },
  next: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.android.regular,
    fontSize: 16,
  },
  done: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.android.regular,
    fontSize: 16,
  },
});

export default OnboardingScreens;
