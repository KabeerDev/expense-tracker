import React from 'react';

const Select = ({ label, onChange, options, type}) => {
    return (
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-lg'>{label}</span>
            <select
                className='w-full outline-none px-3 py-2 rounded-md border border-gray focus:outline-primary'
                onChange={onChange}
                value={type}
            >
                {options.map((item, index) => {
                    return <option key={index} value={item.value}>{item.label}</option>
                })}
            </select>
        </div>
    )
};

export default Select
