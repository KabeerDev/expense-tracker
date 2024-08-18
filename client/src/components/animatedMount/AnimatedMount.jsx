import React, { useEffect, useState } from 'react'

const AnimatedMount = ({ children, show = false, unmountTime = 3 }) => {
    const [mounted, setMounted] = useState(show)

    const handleAnimationEnd = () => {
        if (!show) {
            setMounted(false)
        }
    }
    useEffect(() => {
        if (show) {
            const toastTimeout = setMounted(true)
            setTimeout(() => {
                setMounted(false)
            }, unmountTime * 1000);
        };
    }, [show]);

    return (
        <>
            {mounted && <div
                className={mounted && 'toast-animation'}
                style={{ animationDelay: `${unmountTime - 1}s` }}
                onAnimationEnd={handleAnimationEnd}
            >
                {children}
            </div>}
        </>
    )
}

export default AnimatedMount
