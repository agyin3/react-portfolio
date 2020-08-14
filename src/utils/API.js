 import axios from 'axios'

 export default axios.create({
     baseURL: process.env.REACT_APP_BASE_DB__URL,
     headers: {
         authorization: localStorage.getItem("token")
     },
     responseType: 'json'
 })