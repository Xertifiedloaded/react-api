import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/mainLayout'
import Profile from './pages/profile/profile'
import User from './pages/users/user'

const RoutesLayout = () => {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                path: "/",
                element: <User/>
                },
                {
                path: "/profile/:id",
                element: <Profile/>
                }
            ]
        }
    ]

    )
}

export default RoutesLayout;