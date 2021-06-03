const axios = require('axios')

const method = {
  sum:(a,b)=>{
    return a+ b
  },
  checkValue: (value)=>{
    return value
  },
  returnObject: ()=>{
    const data = {name: 'risano', email: 'risanoakbar@gmail.com'}
    return data
  },
  fetchUser:()=>{
    return axios.get('https://jsonplaceholder.typicode.com/albums/1')
    .then((res)=>res.data)
  }
}
module.exports = method