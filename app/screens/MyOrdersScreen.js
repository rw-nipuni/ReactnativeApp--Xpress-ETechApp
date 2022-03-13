import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class MyOrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      cartItemsIsLoading: false,
      cartItems: [
        {
          itemId: '501436323',
          name: 'Wired Mouse with RGB Backlit, KKUOD Silent USB Computer Mouse',
          thumbnailImage:
            'https://m.media-amazon.com/images/I/61M9TBM9HaL._AC_UY327_FMwebp_QL65_.jpg',
          color: 'Black',
          qty: 1,
          salePrice: '800',
          checked: 1,
        },
        {
          itemId: '35031861',
          name: 'Fiodio Rainbow Membrane Gaming Keyboard',
          thumbnailImage:
            'https://m.media-amazon.com/images/I/71z6gsI87bL._AC_UL480_FMwebp_QL65_.jpg',
          qty: 1,
          color: 'Purple',
          salePrice: '1990',
          checked: 0,
        },
        {
          itemId: '801099131',
          name: 'AILIHEN C8 Wired Headphones with Microphone ',
          thumbnailImage:
            'https://m.media-amazon.com/images/I/71XfadRBl1L._AC_UL640_QL65_.jpg',
          qty: 1,
          color: 'Green',
          salePrice: '1500',
          checked: 1,
        },
        {
          itemId: '42608079',
          name: 'Portable Charger Power Bank 25800mAh',
          thumbnailImage:
            'https://m.media-amazon.com/images/I/61p9QTx-jgL._AC_UY327_FMwebp_QL65_.jpg',
          color: 'Purple',
          qty: 1,
          salePrice: '8000',
          checked: 0,
        },
        {
          itemId: '247714372',
          name: 'HP 14" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm',
          thumbnailImage:
            'https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
          qty: 1,
          color: 'Black',
          salePrice: '269',
          checked: 1,
        },
        ,
      ],
    };
  }

  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems[index].checked = value === 1 ? 0 : 1; // set the new value
    this.setState({cartItems: newItems}); // set new state
  };

  selectHandlerAll = value => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems.map((item, index) => {
      newItems[index].checked = value === true ? 0 : 1; // set the new value
    });
    this.setState({
      cartItems: newItems,
      selectAll: value === true ? false : true,
    }); // set new state
  };

  deleteHandler = index => {
    Alert.alert(
      'Are you sure you want to delete this item from your cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            let updatedCart = this.state.cartItems; /* Clone it first */
            updatedCart.splice(
              index,
              1,
            ); /* Remove item from the cloned cart state */
            this.setState(updatedCart); /* Update the state */
          },
        },
      ],
      {cancelable: false},
    );
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems]; // clone the array

    let currentQty = newItems[index].qty;

    if (action === 'more') {
      newItems[index].qty = currentQty + 1;
    } else if (action === 'less') {
      newItems[index].qty = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({cartItems: newItems}); // set new state
  };

  subtotalPrice = () => {
    const {cartItems} = this.state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum + (item.checked === 1 ? item.qty * item.salePrice : 0),
        0,
      );
    }
    return 0;
  };

  render() {
    const styles = StyleSheet.create({
      centerElement: {justifyContent: 'center', alignItems: 'center'},
    });

    const {cartItems, cartItemsIsLoading, selectAll} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginBottom: 10,
          }}>
          <View style={[styles.centerElement, {width: 50, height: 50}]}>
            <Icon
              name="cart-arrow-right"
              type="material-community"
              size={25}
              color="#000"
            />
          </View>
          <View style={[styles.centerElement, {height: 50}]}>
            <Text style={{fontSize: 18, color: '#000'}}>Shopping Cart</Text>
          </View>
        </View>

        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, {height: 300}]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
          <ScrollView>
            {cartItems &&
              cartItems.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginBottom: 2,
                    height: 120,
                  }}>
                  <View style={[styles.centerElement, {width: 60}]}>
                    <TouchableOpacity
                      style={[styles.centerElement, {width: 32, height: 32}]}
                      onPress={() => this.selectHandler(i, item.checked)}>
                      <Icon
                        type="material-community"
                        name={
                          item.checked == 1
                            ? 'checkbox-marked-circle'
                            : 'checkbox-marked-circle-outline'
                        }
                        size={25}
                        color={item.checked == 1 ? '#9013fe' : '#aaaaaa'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      flexShrink: 1,
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                      }}
                      style={{paddingRight: 10}}>
                      <Image
                        source={{uri: item.thumbnailImage}}
                        style={[
                          styles.centerElement,
                          {height: 60, width: 60, backgroundColor: '#eeeeee'},
                        ]}
                      />
                    </TouchableOpacity>
                    <View
                      style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                      <Text numberOfLines={1} style={{fontSize: 15}}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={{color: '#8f8f8f'}}>
                        {item.color ? 'Variation: ' + item.color : ''}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{color: '#333333', marginBottom: 10}}>
                        LKR: {item.qty * item.salePrice}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler('less', i)}
                          style={{borderWidth: 1, borderColor: '#cccccc'}}>
                          <Icon
                            name="remove"
                            size={22}
                            color="#cccccc"
                            type="material"
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: '#cccccc',
                            paddingHorizontal: 7,
                            paddingTop: 3,
                            color: '#bbbbbb',
                            fontSize: 13,
                          }}>
                          {item.qty}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler('more', i)}
                          style={{borderWidth: 1, borderColor: '#cccccc'}}>
                          <Icon
                            type="material"
                            name="add"
                            size={22}
                            color="#cccccc"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.centerElement, {width: 60}]}>
                    <TouchableOpacity
                      style={[styles.centerElement, {width: 32, height: 32}]}
                      onPress={() => this.deleteHandler(i)}>
                      <Icon
                        name="delete"
                        type="material-community"
                        size={25}
                        color="#ee4d2d"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </ScrollView>
        )}

        {!cartItemsIsLoading && (
          <View
            style={{
              backgroundColor: '#fff',
              borderTopWidth: 2,
              borderColor: '#f6f6f6',
              paddingVertical: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.centerElement, {width: 60}]}>
                <View style={[styles.centerElement, {width: 32, height: 32}]}>
                  <Icon
                    name="certificate"
                    type="material-community"
                    size={25}
                    color="#f0ac12"
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Voucher</Text>
                <View style={{paddingRight: 20, height: 40}}>
                  <TextInput
                    style={{
                      paddingHorizontal: 10,
                      backgroundColor: '#f0f0f0',
                      height: 40,
                      borderRadius: 4,
                    }}
                    placeholder="Enter voucher code"
                    onChangeText={searchKeyword => {}}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.centerElement, {width: 60}]}>
                <TouchableOpacity
                  style={[styles.centerElement, {width: 32, height: 32}]}
                  onPress={() => this.selectHandlerAll(selectAll)}>
                  <Icon
                    type="material-community"
                    name={
                      selectAll === true
                        ? 'checkbox-marked-circle'
                        : 'checkbox-marked-circle-outline'
                    }
                    size={25}
                    color={selectAll === true ? '#9013fe' : '#aaaaaa'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Select All</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingRight: 20,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
                  <Text>LKR :{this.subtotalPrice().toFixed(2)}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 32,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    backgroundColor: '#9013fe',
                    width: 100,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
                onPress={() => {
                  this.props.navigation.navigate('PaymentScreen');
                }}>
                <Text style={{color: '#ffffff'}}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
