import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Linking
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OrderHeader from '../common/OrderHeader';
import { ClothListItem } from '../components/ListItems/ClothListItem';
import { OrderStatus } from '../components/OrderStatus';
import { PandDCard } from '../components/PandDCard';
import { OrderAddressCard } from '../components/OrderAddressCard';
import { ClothList } from '../components/ClothList';
import { STPCard } from '../components/STPCard';
import { Button } from 'react-native-paper';
export default class OrderScreen2 extends React.Component {
  state={
    emailAddress:'',

  }
  static navigationOptions = {
     header:<OrderHeader />
    };
    renderItem = (data) => {
  
     return (
      <ClothListItem data={data}/>
      );
   }
  render() {
    const {item} = this.props.navigation.state.params.data;
    console.log(item);  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         
         <OrderStatus item={item}/>
         
         {/*PickupandDeliveryCard*/}
          <PandDCard item={item}/>
         {/*PickupandDeliveryCard*/}
         
         {/*AddressSection*/}
           <OrderAddressCard item={item}>Address</OrderAddressCard>
         {/*AddressSection*/}
       
         {/*ClothList*/}
         <ClothList
          data={item.clothesItem} 
          renderItem={this.renderItem}>Clothes</ClothList>
         {/*ClothList*/}

         {/*tax and sub total and paid*/}
         <STPCard finalAmount={item.finalAmount} >Paid Via {item.payment.paymentMode}</STPCard>
         {/*tax and sub total ad paid*/}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
  },
  contentContainer: {
    backgroundColor:'#F2F2F2'
  },
});
