import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import MapScreen from '../screens/MapScreen';

const App = createStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <App.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
