import React, { useEffect, useState } from 'react'
import { Button, SimpleContainer, SimpleInput } from '../../../styled-components'
import API from '../../../utils/API'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const history = useHistory()
    const [quote, setQuote] = useState('')
    const { register, handleSubmit, reset, errors } = useForm()

    const getQuote = async () => {
        try{
            const res = await axios.get('https://api.kanye.rest/')
            console.log(res.data.quote)
            setQuote(res.data.quote)
        }catch(err){
            console.log('You fucked up: ', err.response)
        }
    }


    const onSubmit = async (data) => {
        try {
            const res = await API.post('/login', data)
            localStorage.setItem('token', res.data.token)
            history.push('/admin/dash')
            
        }catch(err) {

            console.log('There was an error: ', err.response)

        }finally {

            reset()

        }
    }

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <SimpleContainer
        color='#000'
        direction='column'
        >
        <h1>Welcome Back, CodingGod!</h1>
        <p style={{
            width: '40%', 
            margin: '2.5% auto', 
            textAlign: 'center'
        }}
        >
            {quote}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='username'>Username</label>
                <br />
                <SimpleInput id='username' name='username' ref={register({ required: true })}/>
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <br />
                <SimpleInput id='password' type='password' name='password' ref={register({ required: true })}/>
            </div>

            <Button type='submit' onSubmit={onSubmit}>Submit</Button>
        </form>
        </SimpleContainer>
    )
}

export default Login