// TODO: 1. Render 'TO BE CALCULATED' instead of amount and payment mode in payment section if order.status == CREATED;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableRipple, Button } from 'react-native-paper';
import { Card } from '../../common';
import { orderUpdate } from '../../ApiRequests/UploadData';
const OrderListItem = (props) => {
 const { item } = props.data;

 let pDate = '';
 let pTime = '';
 let address = '';


 if(item.pickUp != undefined){
  pDate = item.pickUp.pickupDate;
  pTime = item.pickUp.pickupTime;
  address = item.orderAddress.formatedAddress;
}
    return (
        <Card>       
        <TouchableRipple
        onPress={props.onPressFull}
        rippleColor="rgba(0,0,0, 0.3)"
        borderless={true}
        >
         <View style={styles.container}> 
             <View style={styles.OrderStatusProgressContainer}>
                <Image
                  source={require('../../assets/images/ordeimage2.png')}
                     style={{
                 width:wp('5.5%'), 
                 height:hp('3.5%'),
            //    overflow:'hidden',
                 top:hp('3.8%'),
                   position:'absolute'
                         }}
                  resizeMode={'stretch'}
                     />
                <AnimatedCircularProgress
               size={55}
               width={3}
               fill={100}
               tintColor="#00e0ff"
               backgroundColor="#F2F2F2" />
             </View>
             <View style={styles.OrderDetailsContainer}>
           
             <View style={styles.container1}>
             <View style={styles.HeadingContainer}>
             <Text style={styles.Heading}>{item.serviceType}</Text>
             <Text style={styles.time}>{item.orderId} </Text>
             </View>
             <View style={styles.buttonContainer}>
                 <TouchableRipple
                 disabled={props.disable}
                   style={styles.touchable}
                   rippleColor="rgba(0,0,0, 0.3)"
                   borderless={false}
                   onPress={props.onPress}>
                        <Text style={styles.text}>{item.orderStatus}</Text>
             </TouchableRipple>
             </View>
             </View>
             <View style={styles.container2}>
               <View style={styles.deliveryTime}>
                   <Text style={styles.SubHeading}>Delivery Time</Text>
                   <Text style={styles.date}>{pDate}</Text>
                   <Text style={styles.time2}>{pTime}</Text>
               </View>
               <View style={styles.payment}>
                   <Text style={[styles.SubHeading, {width:wp('30%')}]}>Payment</Text>
                   <Text style={[styles.date, {width:wp('30%')}]}>₹ {item.finalAmount}</Text>
                   <Text style={[styles.time2, {width:wp('30%')}]}>{item.payment.paymentMode}</Text>
               </View>
             </View>
             <View style={styles.container3}>
               <Text style={styles.SubHeading}>
                   Delivery Address
               </Text>
               <Text style={styles.date}>{address}</Text>
             </View>
           </View>
        </View> 
        </TouchableRipple>
        </Card>
   
    );
  };
  
  const styles = StyleSheet.create({
      container3:{
           paddingTop:hp('1.5%')
      },
      time2:{
        fontSize:wp('3.5%'),
        color:'#000',
      },
      date:{
         fontSize:wp('3.5%'),
         color:'#000',
         fontWeight:'500'
      },
      payment:{
          flex:1,
          alignItems:'center'
      },  
    deliveryTime:{
         flex:1
      },
      container2:{
          paddingTop:hp('1.6%'),
          flexDirection:"row"
      },
    text:{
        color:'#ffffff',
        fontSize:wp('3.5%'),
        fontWeight:'500' 
        },
    touchable:{
        width:wp('30%'),
        height:hp('6%'),
        backgroundColor:'#11C3F0',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
      },
      buttonContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      },
      HeadingContainer:{
       flex:1
      },
      container1:{
       flexDirection:'row'
      },
      time:{
          flex:1,
         fontSize:wp('3.5%'),
         fontWeight:'500',
         color:'#000',
      },
    OrderStatusProgressContainer:{
        flex:1,
        alignItems:'center',
       paddingTop:hp('1.5%') 
     },
      SubHeading:{
          fontSize:wp('3%'),
          paddingBottom:hp('.8%')
      },
    container:{
        flexDirection:'row',
      marginBottom:hp('1%'),
     
      paddingLeft:wp('3%'),
      paddingBottom:hp('2%'),
      paddingTop:hp('1%')

      },
      Heading:{
          flex:3,
        fontSize:wp('4.4%'),
        fontWeight:'500',
        color:'#11C3F0',
        fontFamily:'Gotham',
        paddingBottom:hp('.5%')
      },
      OrderDetailsContainer:{
        paddingTop:hp('2%'),
        flex:4,
        paddingLeft:wp('1%')
      },
  });
  
  export { OrderListItem };
  