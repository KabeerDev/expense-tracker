import React from 'react';
import useToast from '../hooks/useToast';
import ToastNotification from '../components/ToastNotification';
import Navbar from '../components/navbar';
import { useMatch } from 'react-router-dom';
import usePage from '../hooks/usePage';

const Layout = ({ children }) => {
    const { Toast } = useToast();
    const { path } = usePage();
    const signup = useMatch('/signup');
    const login = useMatch('/signin');
    const checkAuth = () => {
        return signup || login;
    };
    const isAuth = checkAuth();

    return (
        <>
            <div className='flex h-screen overflow-hidden'>
                {!isAuth && (
                    <Navbar />
                )}
                <main className={`${path && "opacity-0"} transition-opacity duration-400 h-full w-full overflow-y-auto`}>{children}</main>
            </div >
            <ToastNotification show={Toast} {...Toast} />
        </>
    )
}

export default Layout
