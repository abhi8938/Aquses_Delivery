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
import { TouchableRipple } from 'react-native-paper';
import { getAssignedOrders } from '../../ApiRequests/GetData';
import { orderUpdate } from '../../ApiRequests/UploadData.js';
import { ActivityIndicator } from 'react-native-paper';
export default class Assigned extends React.Component {

  state={
    data:[],
    loading:false,
    NoOrders:false
  }
  updateOrder = async (orderId, orderStatus) => {
    this.setState({loading:true});
    console.log(`status`,orderStatus);
    const status = await orderUpdate(orderId,orderStatus);
    if(status.status == 200 ){
      //TODO: AlertModal with response and also change status Maybe shift this function to parent element
      const orders = await getAssignedOrders();
      if(orders.status == 200){
        if(orders.data.length == 0){
          this.setState({ NoOrders:true });
        }
        this.setState({ data:orders.data});
      }else{
        alert(orders.data);
        }
      this.setState({loading:false});
      alert(status.data);
    }else if(status.status == 400){
      this.setState({loading:false});
      alert(status.data);
    }
  }

  componentDidMount() {
    this.setState({ loading: true});
    this.didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
     async payload => {
       //TODO: Paas employeeId to find the orders assigned to the employee
      const orders = await getAssignedOrders();
      console.log(`orders length`, orders.data.length)
      if(orders.status == 200){
        if(orders.data.length == 0){
          this.setState({ NoOrders:true });
        }
       this.setState({ data:orders.data,loading:false});
      }else{
        this.setState({ loading: false});
        console.log('response assigned', order.data);
      }
    
  }
  )}
  componentWillUnmount(){
    this.didBlurSubscription.remove();
 }
renderItem= (data) => {
  return (
      <OrderListItem data={data} 
      onPress={() => this.updateOrder(data.item.orderId, data.item.orderStatus)}
      onPressFull={() => {
        setTimeout(() =>{
          this.props.navigation.navigate('OrderScreen',{data});
        },1)
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
          <Text style={{ fontSize:wp('5%'), fontWeight:'bold', color:'#000'}}>No Assigned Orders</Text>
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
