import axios from 'axios';
import AsyncStorage  from '@react-native-community/async-storage';

export const getAssignedOrders = async () => {
  const userData = await getUserCard();
  const Token = await AsyncStorage.getItem('userToken');
  var config = {
      headers: {'Content-Type': 'application/json',
                'x-auth-token': Token,
                "employeeid": userData.employeeId,
                'type':'ASSIGNED'
              }
  };  

 return axios.get('https://aquses.herokuapp.com/api/orders/employees',config)
  .then( response =>{
  return response;
  })
  .catch( error => {
     return error.response;
  } )
}

export const getCompletedOrders = async () => {
  const userData = await getUserCard();
  const Token = await AsyncStorage.getItem('userToken');
  var config = {
      headers: {'Content-Type': 'application/json',
                'x-auth-token': Token,
                "employeeid": userData.employeeId,
                'type':'COMPLETED'
              }
  };

 return axios.get('https://aquses.herokuapp.com/api/orders/employees',config)
  .then( response =>{
  return response;
  })
  .catch( error => {
     return error.response;
  } )
}
export const getUserCard = async () => {
   const Token = await AsyncStorage.getItem('userToken');
   var config = {
       headers: {'Content-Type': 'application/json',
                 'x-auth-token': Token}
   };
  return axios.get(' https://aquses.herokuapp.com/api/employees/me', config)
  .then(response => {
      return response.data;
  })
  .catch( error => {
   console.log(error.response.data);  
   return error;
  })
}




