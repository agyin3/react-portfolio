import * as jwt from 'jsonwebtoken'

export const authenticate = () => {
    const token = localStorage.getItem("token")
    return jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decodedJWT) => {
        if(err){
            return false
        }else{
            return true
        }
    }
)}