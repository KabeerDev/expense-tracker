import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../views/signup';
import Signin from '../views/signin';
import Dashboard from '../views/dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddNew from '../views/addNew';
import Update from '../views/update';

const Router = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path='/new'
                element={
                    <PrivateRoute>
                        <AddNew />
                    </PrivateRoute>
                }
            />
            <Route
                path='/update/:id'
                element={
                    <PrivateRoute>
                        <Update />
                    </PrivateRoute>
                }
            />
            <Route
                path='/signup'
                element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                }
            />
            <Route
                path='/signin'
                element={
                    <PublicRoute>
                        <Signin />
                    </PublicRoute>
                }
            />
            <Route to="*" element={<Navigate to={'/'} />} />
        </Routes>
    )
};

export default Router;
