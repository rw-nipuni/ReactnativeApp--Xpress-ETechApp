import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';

import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import Profile from '../screens/Profile';
import DrawerContent from '../components/DrawerContent';
import PaymentScreen from '../screens/PaymentScreen';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="person"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: 'Payment',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
