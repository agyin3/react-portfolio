 import axios from 'axios'

 export default axios.create({
     baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000',
     headers: {
         authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imp1c3Rzb21lYnVkZHkiLCJpYXQiOjE1OTUyMTY5MjksImV4cCI6MTU5NTMwMzMyOX0.SFnWwycy3giFjUbR9iDJf7FvJeR07cK_H1o07NKrnhM' // Need to change to use local storage before push 
     },
     responseType: 'json'
 })