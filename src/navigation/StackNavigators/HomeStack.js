import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { ACStack } from './ACStack';
import OrderScreen2 from '../../screens/OrderScreen2';
export const HomeStack = createStackNavigator({
  Home: {
    screen: ACStack,
    navigationOptions: () => {
      return {
      header: null
    };
  }
  },
  OrderScreen: {
    screen: OrderScreen2,
    navigationOptions: () => {
      return {
      header: null
    };
  }
  },
});

HomeStack.navigationOptions={
  tabBarIcon: ({ tintColor}) => (
    <Icon 
      name = 'ios-home'
      color = {tintColor}
      size={26} 
    />
    )
}