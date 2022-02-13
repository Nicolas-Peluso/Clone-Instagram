import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import UserConta from './UserConta';
import { Context } from '../GlobalContext';

function Conta() {
    const { login } = React.useContext(Context)

    if (login === false) return <Navigate to="/login" />

    return (
        <>
            <Routes>
                <Route path='/' element={<UserConta />} />
            </Routes>
        </>
    );
}

export default Conta;
