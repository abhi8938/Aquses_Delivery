import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class MyProfile extends React.Component {
 
  
  static navigationOptions = {
        headerTitle: null,
        headerRight: null,
        
    };

  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
           <View>
               <Text>MyProfile</Text>
           </View> 
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7AC5CD',
    borderTopWidth: 0,
  },

});
