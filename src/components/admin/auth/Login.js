import React from 'react'
import { Button } from '../../../styled-components'
import API from '../../../utils/API'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const { register, handleSubmit, reset, errors } = useForm()


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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='username'>Username</label>
                <input id='username' name='username' ref={register({ required: true })}/>
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' ref={register({ required: true })}/>
            </div>

            <Button type='submit' onSubmit={onSubmit}>Submit</Button>
        </form>
    )
}

export default Login