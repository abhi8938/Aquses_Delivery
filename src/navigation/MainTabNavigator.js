import React from 'react';
import {
  createAppContainer
} from 'react-navigation';
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import { HomeStack } from './StackNavigators/HomeStack';
import { AccountStack } from './StackNavigators/AccountStack';
export default createAppContainer(createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeStack
  },
  AccountScreen: {
    screen: AccountStack,
  }
}, {
  initialRouteName: 'HomeScreen',
  shifting:false,
  labeled:false,
  activeColor: '#11C3F0',
  inactiveColor: '#999999',
  barStyle: {
    backgroundColor: '#ffffff',
  },
}));