import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Images from '../../constants/Images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const GalleryScreen = () => {
  return (
    <ScrollView>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {Images.map((image, index) => (
          <Image
            source={image.URL}
            style={{
              height: deviceHeight / 4,
              width: deviceWidth / 3 - 6,
              borderRadius: 10,
              margin: 2,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GalleryScreen;
