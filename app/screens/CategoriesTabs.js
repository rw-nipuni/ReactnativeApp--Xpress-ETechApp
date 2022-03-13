import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {categoriesData, categoriesDetailedData, categoriesDetailedData2, categoriesDetailedData3, categoriesDetailedData4, categoriesDetailedData5, categoriesDetailedData6, categoriesDetailedData7, categoriesDetailedData8} from '../global/Data';
import CategoriesCard from '../components/CategoriesCard';

export function Route1({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export function Route2({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData5}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export function Route3({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export function Route4({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export function Route5({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export function Route6({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData6}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export function Route7({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData7}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export function Route8({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={categoriesDetailedData8}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <CategoriesCard
                productName={item.Device}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#673ab7',
  },

  view2: {marginTop: 5, paddingBottom: 20},

  scene2: {backgroundColor: '#673ab7'},
});
