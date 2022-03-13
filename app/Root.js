import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SignInContextProvider} from './contexts/authContext';
import {colors} from './global/styles';
import RootNavigator from './navigation/rootNavigation';

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />

        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
