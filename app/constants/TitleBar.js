import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';

export default function TitleBar({}) {
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}
      />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
            alignContent: 'center',
            textAlign: 'center',
            paddingRight: 115,
          }}>
          Xpress E-Tech
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
