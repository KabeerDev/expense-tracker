import React from 'react';
import { getName } from '../utils/helper';
import useSession from './../hooks/useSession';
import { LogoutIcon, HomeIcon, AddIcon } from '../assets';
import Button from './navComponents/button';
import usePage from '../hooks/usePage';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useSession();
    const { setPath } = usePage();
    const location = useLocation().pathname;
    const onclick = (path) => {
        if (location != path) {
            setPath(path);
        };
    };

    return (
        <div className="w-24 relative flex gap-5 flex-col items-center py-5 bg-primary h-screen">
            <Button
                icon={HomeIcon}
                label="home"
                path={"/"}
                onClick={() => onclick('/')}
            />
            <Button
                icon={AddIcon}
                label="add new"
                path={"/new"}
                onClick={() => onclick('/new')}
            />
            <Button
                icon={LogoutIcon}
                label="logout"
                onClick={logout}
                style={{
                    fontSize: "15px",
                }}
            />
            <div className='w-14 h-14 absolute bottom-10 bg-white border-4 border-lightYellow rounded-circle flex justify-center items-center text-2xl font-semibold'>
                {getName(user?.name)}
            </div>
        </div>
    )
}

export default Navbar
