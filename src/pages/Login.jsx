import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginQuery } from '../store/loginSlice'

export const Login = () => {
    const [userName, setUserName] = useState('kminchelle')
    const [userPassword, setUserPassword] = useState('0lelplR')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(loginQuery({userName, userPassword}))
        navigate('/todo')
    }

    return (
        <div>
            <div className="container">
                <div className="login__inner">
                    <div className="page__login">
                        <h2>Login</h2>
                        <form onSubmit={handlerSubmit}>
                            <input type="text" value={userName} 
                                onChange={(e) => setUserName(e.target.value)} />
                            <input type="text" value={userPassword} 
                                onChange={(e) => setUserPassword(e.target.value)} />
                            <button type='submit'>login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
