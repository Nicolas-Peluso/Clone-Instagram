import React from 'react'
import { Route, Routes } from "react-router-dom"
import UserPhotoPost from './UserPhotoPost'

function Photo() {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserPhotoPost />} />
            </Routes>
        </>
    )
}

export default Photo