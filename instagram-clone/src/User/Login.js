import React from 'react';
import { Route, Routes } from "react-router-dom"
import LoginCreate from './LoginCreate';
import UserLogin from './UserLogin';

function Login() {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="criar" element={<LoginCreate />} />
            </Routes>
        </>
    );
}

export default Login;
