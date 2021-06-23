import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextField1, Button1} from '../../common';

export default class ForgotPassword extends React.Component {
  state={
    email:'',
  }
  render() {
    return (
     
     <View styles={styles.container}>
       <View style={styles.PageHeading}>
         {/*Sign in now */}
         <Text style={styles.ForgotPasswordText}>Let us know your registered email Address and we'll send you password reset instruction </Text>
       </View>
       <View style={styles.InputContainer}>
         {/** email */}
          <TextField1
              label={'Email'}
              value={this.state.email}
              onChangeValue={(email) => this.setState({ email:email})}
              keyboardType={'email-address'}

          />
       </View>
       <View style={styles.ButtonContainer}>
        {/** Touchable ForgotPassword */}
        <Button1
         onPress={() => this.props.navigation.navigate('Main')}
        >Reset</Button1>
       </View>
      
     </View>
    );
    
  }
}


const styles = StyleSheet.create({

  registerTitle:{
     fontSize:wp('4.5%'),
     fontWeight:'bold'
  },
  PageHeading:{
   alignItems:'center',
   paddingBottom:hp('4%'),
   paddingLeft:wp('4%'),
   paddingRight:wp('4%')
  },
  ForgotPasswordText:{
      textAlign:'center',
    fontSize:wp('5%'),
    color:'#000',
    paddingTop:hp('10%'),
  },
  appName:{
      fontSize:wp('7%'),
      color:'#000',
      paddingTop:hp('4%'),
      fontWeight:'500'
  },
  ImageContainer:{
    // backgroundColor:'#ccc',
    width:wp('100%'),
    height:hp('18%'),
    alignItems:'center',
    justifyContent:'center' 
  },
  logo:{
    width:wp('20%'),
    height:hp('15%')
  },
  container: {
    borderTopWidth: 0,
    alignItems:'center',
    // justifyContent:'center' 
  },

});
