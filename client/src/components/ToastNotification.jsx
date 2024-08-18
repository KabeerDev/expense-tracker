import React from 'react'
import AnimatedMount from './animatedMount/AnimatedMount'

const ToastNotification = ({
    show = false,
    unmountTime,
    content,
    heading,
}) => {
    return (
        <AnimatedMount show={show} unmountTime={unmountTime} >
            <div className="max-w-xs fixed py-4 bottom-10 right-10 bg-white border border-gray-200 rounded-xl shadow-lg" role="alert">
                <div className="flex items-center gap-2 px-4">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M11.992 15H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-lg">
                            {heading}
                        </p>
                    </div>
                </div>
                <div className="px-4">{content}</div>
            </div>
        </AnimatedMount>
    )
}

export default ToastNotification
