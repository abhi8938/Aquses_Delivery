import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assigned from './../../screens/HomeTabs/Assigned';
import Completed from './../../screens/HomeTabs/Completed';

const ACTab = createMaterialTopTabNavigator({
    Assigned:{
        screen: Assigned,
        navigationOptions: () =>{
           return {header: null}
        },
        
    },
    Completed:{
        screen: Completed,
        navigationOptions: () =>{
            return {header: null}
        }
    }
},
{
    initialRouteName: 'Assigned',
    animationEnabled: true,
    swipeEnabled:false,
     tabBarOptions:{
         style:{ backgroundColor: '#fff', elevation: 0 },
         indicatorStyle:{ 
             backgroundColor:"#11C3F0"   
         },
         labelStyle:{ fontSize: wp('3.5%'), },
       activeTintColor:'#11C3F0',
       inactiveTintColor:'#000'
     }
    }
)




export const ACStack = createStackNavigator({
    HomeTab:{
        screen:ACTab,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:'Pickup & Deliveries',
                headerStyle:{
                  elevation:0
                }
            }
        }
    }
});

