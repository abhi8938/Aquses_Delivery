import React from 'react';
import { View, Text, Image, TouchableHighlight, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const STPCard = (props) => {
  console.log(`stpcard`, props);
  let SubTotal =props.finalAmount;
  let Tax =  18/100 * SubTotal;
  Tax = parseInt(Tax);
  let TotalAmount = SubTotal + Tax;
  if(props.finalAmount == undefined){
    SubTotal = '',
    Tax = '',
    TotalAmount='Not Calculated'
  }
    return (
        <View style={styles.stpContainer}>
        <View style={styles.TotalContainer}>
          <View style={styles.Total}>
          <Text style={styles.heading}>Sub Total</Text>
          <Text style={styles.heading}>Tax</Text>
          </View>
          <View style={styles.Money}>
          <Text style={styles.moneytext}>₹ {SubTotal}</Text>
          <Text style={styles.moneytext}>₹ {Tax}</Text>
          </View>
        </View>
        <View style={styles.PaidTextContainer}>
          <Text style={styles.paidText}>{props.children}</Text>
          <Text style={styles.paidValue}>₹ {TotalAmount}</Text>
        </View>
        </View>
    );
  };
  
  const styles = {
    paidValue:{
        textAlign:'right',
        paddingRight:wp('5.5%'),
        fontSize:wp('4.8%'),
         fontWeight:'500',
         color:'#000',
         alignItems:'center'
       },
       paidText:{
         fontWeight:'500',
         flex:2,
         fontSize:wp('4.5%'),
         color:'#11C3F0'
       },
       stpContainer:{
        flexDirection:'column',
        width:wp('100%'),
        backgroundColor:"#fff",
        paddingLeft:wp('3%'),
        marginTop:hp('.5%'),
        paddingTop:hp('1.5%')
       },
       PaidTextContainer:{
         paddingBottom:hp('1.5%'),
        flexDirection:'row',
       },
        moneytext:{
         flex:1,
         fontSize:wp('4.8%'),
         fontWeight:'500',
         color:'#000',
         alignItems:'center'
        },
       Money:{
        flex:1,
        alignItems:'flex-end',
       paddingRight:wp('5.5%')
       },
       Total:{
         flex:1
       },
       TotalContainer:{
         flexDirection:'row',
        
       },
      heading:{
        fontSize:wp('5%'),
        color:'#A9A9A9',
        fontWeight:'400',
        paddingBottom:hp('1.5%')
      },
      
  };
  
  export { STPCard };
  