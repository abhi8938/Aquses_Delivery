import React from 'react';
import { View, Text, Image, TouchableHighlight, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableRipple } from 'react-native-paper';

const OrderAddressCard = (props) => {
  let address = '';
  if (props.item.orderAddress != undefined) {
    address = `${props.item.orderAddress.houseFloor}, ${props.item.orderAddress.formatedAddress}`
  }
  return (
    <TouchableRipple
      style={{
        marginTop: hp('.5%'),
        backgroundColor: '#fff',
        paddingTop: hp('1.5%'),
        paddingRight: wp('2%'),
        paddingBottom: hp('1.5%')
      }}
      borderless={false}
      onPress={() => {
        setTimeout(() => {
          Linking.openURL(`http://maps.google.com/maps?daddr=${props.item.orderAddress.latitude},${props.item.orderAddress.longitude}`);
        }, 10)
      }}
    >
      <View style={styles.AddressContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingLeft: wp('8%'), }}>
            <Text style={styles.heading}>{props.children}</Text>
            <Text style={styles.date}>{address}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ borderRadius: 30, width: wp('13%'), height: hp('7%') }}
              source={require('../assets/images/navigate_Icon.png')}
            />

          </View>
        </View>
        <View style={{ width: wp('100%'), alignItems: "center", paddingTop: hp('.5%'), paddingBottom: hp('.5%') }}>
          <Image
            style={{ width: wp('98%'), height: hp('28%') }}
            source={require('../assets/images/map.jpg')}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = {
  AddressContainer: {

    flex: 1,
  },
  date: {
    fontSize: wp('4.5%'),
    color: '#000',
    fontWeight: '500',
    paddingBottom: hp('1%')
  },
  heading: {
    fontSize: wp('5%'),
    color: '#A9A9A9',
    fontWeight: '400',
    paddingBottom: hp('1.5%')
  },

};

export { OrderAddressCard };
