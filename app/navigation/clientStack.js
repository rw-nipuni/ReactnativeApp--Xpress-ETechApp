import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CategoriesProductScreen from '../screens/CategoriesProductsScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
import PaymentScreen from '../screens/PaymentScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import SuccessMsgScreen from '../screens/SuccessMsgScreen';

const ClientSearch = createStackNavigator();

export function ClientStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'ShopHomeScreen' || 'SuccessMsgScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="ShopHomeScreen"
        component={ShopHomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="CategoriesProductsScreen"
        component={CategoriesProductScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="SuccessMsgScreen"
        component={SuccessMsgScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
