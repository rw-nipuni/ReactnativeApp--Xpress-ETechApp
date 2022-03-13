import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import StarRating from 'react-native-star-rating';

export default class ReviewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: 3.5,
      customStarCount: 2.5,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  onCustomStarRatingPress(rating) {
    this.setState({
      customStarCount: rating,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Customer Ratings</Text>
          <Text style={styles.welcome2}>Average Ratings</Text>
          <Text style={styles.instructions}>
            {`${this.state.generalStarCount} of stars is displayed`}
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            fullStarColor="#edbc0c"
            rating={this.state.generalStarCount}
            reversed
            starSize={50}
            selectedStar={rating => this.onGeneralStarRatingPress(rating)}
          />
          <Text style={styles.welcome2}>Rate us</Text>
          <Text style={styles.instructions}>
            {`${this.state.customStarCount} of stars is displayed`}
          </Text>
          <StarRating
            disabled={false}
            emptyStar="ios-star-outline"
            fullStar="ios-star"
            halfStar="ios-star-half"
            iconSet="Ionicons"
            maxStars={7}
            rating={this.state.customStarCount}
            selectedStar={rating => this.onCustomStarRatingPress(rating)}
            fullStarColor="red"
            halfStarColor="green"
            emptyStarColor="blue"
            halfStarEnabled
            starPadding={10}
          />
          <View>
            <Text style={styles.welcome}>Customer Reviews</Text>
          </View>

          <View>
            <Text style={styles.review}>Kasun Kalhara</Text>
            <Text style={styles.date}>2021/12/2</Text>
          </View>

          <View>
            <Text style={styles.info}>
              Good display of Electronic items. At times there are stock issues
              and few Price mismatch, but stores give good support on all
              parameters
            </Text>
          </View>

          <View>
            <Text style={styles.review}>Dasun Madushan</Text>
            <Text style={styles.date}>2021/12/6</Text>
          </View>

          <View>
            <Text style={styles.info}>
              Received on time. But warranty card was not validated by the
              seller with rubber stamp.
            </Text>
          </View>

          
          <View>
            <Text style={styles.review}>Shashi hansika</Text>
            <Text style={styles.date}>2021/12/6</Text>
          </View>

          <View>
            <Text style={styles.info}>
              Fast delivery by the seller. They answered all my inquiries with
              patience. I love my new iMac. Looking so beautiful on my desk ??
              Also, definitely the best Mac I ever had.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  date: {
    fontSize: 10,
    textAlign: 'left',

    color: '#e1e8ee',
  },

  welcome: {
    fontSize: 25,
    textAlign: 'left',
    margin: 6,
    color: '#9013fe',
    marginRight: 170,
    fontWeight: 'bold',
    marginTop: 25,
  },
  welcome2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#e1e8ee',
  },
  review: {
    marginRight: 240,
    fontSize: 20,
    textAlign: 'left',

    color: 'grey',
  },
  instructions: {
    textAlign: 'center',
    color: '#8f8b8b',
    marginBottom: 5,
  },
  info: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    textAlign: 'justify',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  star: {
    paddingHorizontal: 6,
    opacity: 0,
    backgroundColor: '#FFFF00',
    color: '#FFFF00',
  },
});
