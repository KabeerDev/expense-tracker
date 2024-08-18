import React, { createContext, useState } from 'react'

export const ToastContext = createContext({})

const ToastProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const showToast = (data) => {
        setShow(data);
    }

    return (
        <ToastContext.Provider
            value={{
                show,
                showToast
            }}
        >
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
