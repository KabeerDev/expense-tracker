import React from 'react'

const Error = ({ img, isImage = false, content = "", ...props }) => {
    return (
        <div>
            {isImage ? (
                <div className='w-full h-screen flex items-center justify-center'>
                    <img src={img} alt="an error occured" className='border-0' />
                </div>
            ) : (
                <div
                    className='text-red-500 font-semibold'
                    {...props}
                >
                    {content}
                </div>
            )}
        </div>
    )
}

export default Error
