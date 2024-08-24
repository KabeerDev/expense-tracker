import React from 'react';
import useToast from '../hooks/useToast';
import ToastNotification from '../components/ToastNotification';
import Navbar from '../components/navbar';
import { useMatch } from 'react-router-dom';
import usePage from '../hooks/usePage';
import SessionModal from '../components/sessionModal';
import useSession from './../hooks/useSession';

const Layout = ({ children }) => {
    const { isExpired } = useSession();
    const { Toast } = useToast();
    const { path } = usePage();
    const signup = useMatch('/signup');
    const login = useMatch('/signin');
    const checkAuth = () => {
        return signup || login;
    };
    const isAuth = checkAuth(); 

    if (isExpired) return <SessionModal />;

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
