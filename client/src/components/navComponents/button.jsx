import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Button = ({ icon, label, path, onClick, ...props }) => {
    const [isHover, setIsHover] = useState(false);
    const [showText, setShowText] = useState(false);
    const location = useLocation().pathname;

    useEffect(() => {
        if (isHover) {
            setTimeout(() => {
                setShowText(true);
            }, 100);
        } else {
            setShowText(false);
        }
    }, [isHover]);


    return (
        <button
            className={`w-16 h-16 rounded-xl cursor-pointer relative transition-all duration-200 ${isHover ? "bg-white" : ""}`}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={onClick}
        >
            {!isHover ? (
                <div className='w-full h-full flex gap-1 flex-col items-center justify-center'>
                    <img src={icon} alt={`${label} icon`} width={"40px"} />
                    {(location === path) && <div className='h-1 w-3/4 rounded-md bg-white'></div>}
                </div>
            ) : (
                <div className={`w-full h-full flex items-center justify-center uppercase text-primary text-lg overflow-hidden`}>
                    <span
                        className={`h-fit transition-transform duration-800 ${showText ? "translate-y-0" : "translate-y-12 "}`}
                        {...props}
                    >
                        {label}
                    </span>
                </div>
            )
            }
        </button>
    );
};

export default Button;
