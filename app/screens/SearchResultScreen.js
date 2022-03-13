import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import {shopsData} from '../global/Data';
import {colors} from '../global/styles';
import TitleBar from '../constants/TitleBar';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <TitleBar />
      <View>
        <FlatList
          style={{backgroundColor: colors.cardbackground}}
          data={shopsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              shopName={item.shopName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              OnPressShopCard={() => {
                navigation.navigate('ShopHomeScreen', {
                  id: index,
                  shop: item.shopName,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>
                {shopsData.length}: Results for {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
