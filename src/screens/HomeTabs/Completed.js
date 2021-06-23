import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { OrderListItem } from '../../components/ListItems/OrderListItem.js';
import { getCompletedOrders } from '../../ApiRequests/GetData';
import { ActivityIndicator } from 'react-native-paper';
export default class Completed extends React.Component {

  state={
    data:[],
    loading:false,
    NoOrders:false
  }

  componentDidMount() {
    this.setState({ loading: true});
    this.didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
     async payload => {
      const orders = await getCompletedOrders();
   if(orders.status== 200){
    if(orders.data.length == 0){
      this.setState({ NoOrders:true });
    }
   this.setState({ data:orders.data,loading:false});
   }else{
    this.setState({ loading:false});
    alert(orders.data)
   }
 
  }
  )}

  componentWillUnmount(){
    this.didBlurSubscription.remove();
 }
renderItem= (data) => {
  return (
    <OrderListItem data={data} 
    disable={true}
    onPressFull={() => {
      setTimeout(() =>{
        this.props.navigation.navigate('OrderScreen',{data})},1)
      }}/>
  )
}
  render() {
    if(this.state.loading){
      return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <ActivityIndicator size={30} color='#347EBD' />
        </View>
      )
    }
    if(this.state.NoOrders){
      return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{ fontSize:wp('5%'), fontWeight:'bold', color:'#000'}}>No Completed Orders</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList 
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingTop:hp('1%'),
    backgroundColor:'#F2F2F2'
  },
});
