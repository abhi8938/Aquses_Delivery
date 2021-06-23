import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ClothListItem = (props) => {
 const { item } = props.data;

    return (
        <View style={styles.container}>
           <Text style={styles.quantity}>{item.Quantity}</Text>
           <Text style={styles.multiply}>X</Text>
           <Text style={styles.name}>{item.Item}</Text>
           <Text style={styles.service}>{item.Category}</Text>
           <Text style={styles.fee}>₹30</Text>
        </View>    
    );
  };
  
  const styles = StyleSheet.create({
    fee:{
        flex:1,
        textAlign:'right',
        fontSize:wp('4.8%'),
        fontWeight:'500',
        color:'#000',
        alignItems:'center',
        paddingRight:wp('2.4%')
    },
    service:{
     flex:2,
     textAlign:'center',
     fontSize:wp('4%'),
     fontWeight:'400',
     textAlign:'center',
     paddingTop:hp('.5%'),
    },
    name:{
    flex:1,
    fontSize:wp('4.8%'),
    fontWeight:'500',
    color:'#000'    
    },
    multiply:{
        paddingTop:hp('.5%'),
        paddingLeft:wp('5%'),
        paddingRight:wp('5%'),
        fontSize:wp('4%'),
        fontWeight:'500',
        color:'#000'
    }, 
    quantity:{
        fontSize:wp('4.8%'),
        fontWeight:'500',
        color:'#000'
      },
    container:{
        flexDirection:'row',
        width:wp('100%'),
        height:hp('5.5%'),
        paddingLeft:wp('4%'),
        paddingRight:wp('4%'),
        backgroundColor:'#fff'
    }
  });
  
  export { ClothListItem };
  