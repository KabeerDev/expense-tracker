import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageContext = createContext();

const PageProvider = ({ children }) => {
    const [path, setPath] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (path !== "") {
            setTimeout(() => {
                navigate(path);
                setPath("");
            }, 350);
        };
    }, [path]);


    return (
        <PageContext.Provider
            value={{
                path,
                setPath
            }}
        >
            {children}
        </PageContext.Provider>
    )
}

export default PageProvider;
