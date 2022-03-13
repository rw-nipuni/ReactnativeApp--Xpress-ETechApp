import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import {specialData, categoriesData} from '../../global/Data';

const AboutScreen = ({navigation, shop, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Delivering Happiness On the Go</Text>
          <Text style={styles.info}>
            eZone is an international online shopping and shipping company.
            Consumers and businesses can purchase items from the USA, Canada and
            Europe from virtually anywhere. eZone makes shipping to the
            Caribbean eZ, affordable and fast. With 24 eZone branches globally
            including the Caribbean and Latin America, eZone opens your borders
            and connects you to the world! Online shopping and shipping is made
            eZ with our rates calculator, package tracking software and App. We
            even have an eZshopper feature for shoppers who do not have a credit
            card or wish to pay locally. Sign up today! Have a look at your
            country's eZ location page for more information.
          </Text>
          <Text style={styles.description}>We stand ready to serve you.</Text>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {paddingHorizontal: 10},

  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },

  text1: {
    color: colors.grey3,
    fontSize: 18,
    fontWeight: 'bold',
  },
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
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#59d0f7',
    height: 500,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    textAlign: 'justify',
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
