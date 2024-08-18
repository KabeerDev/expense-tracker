import React, { forwardRef } from 'react';
import Input from './input';
import Error from '../../components/error';

const InputGroup = forwardRef(({ label, isRequired = false, type = "text", error, placeholder, ...props }, ref) => {

    return (
        <>
            <div className='flex flex-col gap-2' ref={ref}>
                <span className='font-semibold text-lg'>{label}{isRequired && "*"}</span>
                <Input
                    type={type}
                    placeholder={placeholder}
                    {...props}
                />
                {error && <Error content={error.message} />}
            </div>
        </>
    )
});

export default InputGroup;