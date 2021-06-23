import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
class OrderHeader extends React.Component {
    render() {
      return(
           <View style={styles.OrderHeader}>
           <View style={styles.iconContainer}> 
           <Icon
                   onPress={() => this.props.navigation.navigate('Home')}
                   name = 'arrowleft'
                   color = '#11C3F0'
                   size={26} 
            />
            </View>
            <View style={styles.Order}>
            <Text style={styles.OrderHeaderTitle}>Order No.22145052</Text>
            <Text style={styles.OrderHeaderDate}>25 June, 2018</Text>
            </View>
            </View>
      );    
}

}
export default withNavigation(OrderHeader);
const styles = StyleSheet.create({
    iconContainer:{
        padding:wp('2%'),
        paddingBottom:hp('5%')
    },
    OrderHeaderDate:{
       
    },
    Order:{
        width:wp('80%'),
        height:hp('10%'),
        alignItems: 'center',
        justifyContent:'space-evenly',
        flexDirection:'column',
    },
       OrderHeader: { 
           width:wp('100%'),
           height:hp('13%'),
           paddingTop:hp('2%'),
            flexDirection: 'row',
            paddingLeft: wp('5%'),
            alignItems: 'center',
            borderWidth:0,
       },
    
      OrderHeaderTitle: {
        paddingLeft: 13,
        fontSize: wp('5.5%'),
        fontWeight:'500',  
        color:'#000'
      },

});
