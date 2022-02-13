import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import LoginCreate from './LoginCreate';
import UserLogin from './UserLogin';
import { Context } from '../GlobalContext';

function Login() {
    const { login } = React.useContext(Context)

    if (login) return <Navigate to="/conta" />

    return (
        <>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="/criar" element={<LoginCreate />} />
            </Routes>
        </>
    );
}

export default Login;
