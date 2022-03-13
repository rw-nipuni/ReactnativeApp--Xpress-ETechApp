import React, {useState, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from 'react-native-elements';
import {SignInContext} from '../contexts/authContext';

import {colors} from '../global/styles';

export default function DrawerContent(props) {
  const [darkMode, setDarkMode] = useState(false);
  const {dispatchSignedIn} = useContext(SignInContext);
  async function signOut() {
    try {
      auth()
        .signOut()
        .then(() => {
          console.log('log out');
          dispatchSignedIn({
            type: 'UPDATE_SIGN_IN',
            payload: {userToken: null},
          });
        });
    } catch (err) {
      Alert.alert(err.code);
    }
  }
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                Nipuni udari
              </Text>
              <Text style={{color: colors.cardbackground, fontSize: 14}}>
                {' '}
                NipuniUdari@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                value={darkMode}
                onValueChange={val => {
                  setDarkMode(val);
                }}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              signOut();
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
