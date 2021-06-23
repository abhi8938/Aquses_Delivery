import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AccountScreen from '../../screens/AccountScreen';
import Icon from "react-native-vector-icons/Ionicons";
export const AccountStack = createStackNavigator({
  Account: AccountScreen,
  navigationOptions: () => { 
    return {
      header: null
    };
  }
});

AccountStack.navigationOptions = {
  tabBarIcon: ({ tintColor}) => (
    <Icon name = 'ios-menu'
      color={tintColor}
      size={24} 
    />
    )
};

