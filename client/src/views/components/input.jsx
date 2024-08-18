import React, { forwardRef } from 'react'

const Input = forwardRef(({ type = 'text', placeholder = "", name = "", ...props }, ref) => {
    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            className='w-full outline-none px-3 py-2 rounded-md border border-gray focus:outline-primary'
            name={name}
            ref={ref}
        />
    )
})

export default Input
