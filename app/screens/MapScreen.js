/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import {colors, parameters, title} from '../global/styles';
import {Marker} from 'react-native-maps';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import TitleBar from '../constants/TitleBar';
import Header from '../components/Header';

export default function MapScreen({navigation}) {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.view2} />

      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 6.864937410242063,
          longitude: 79.90085304664619,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 6.864937410242063,
            longitude: 79.90085304664619,
          }}
          title={'Nugegoda'}
          description={'Wijerama junction,University of Sri jayewardenepura'}
        />
      </MapView>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="Save your Delivery location"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  createButton: {
    borderWidth: 1,
    borderColor: colors.black,

    height: 50,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 50,
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
