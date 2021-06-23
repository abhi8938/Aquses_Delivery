import axios from 'axios';


export const createUserToken = async (
  emailAddress,
  password
) => {

 return axios.post('https://aquses.herokuapp.com/api/auth/employee',{
       emailAddress: emailAddress,
       password: password
  })
  .then( response =>{
  return response;
  })
  .catch( error => {
    console.log(error);
    return error.response;
  } )
}


export const orderUpdate = async (
  orderId,
  orderStatus
) => {

 return axios.put('https://aquses.herokuapp.com/api/orders',{
       orderId,
       orderStatus
  })
  .then( response =>{
  return response;
  })
  .catch( error => {
     return error.response;
  } )
}

