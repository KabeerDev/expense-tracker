import React, { useEffect } from 'react';
import { icon } from './../../../utils/helper';

const Categories = ({ type, category, setCategory, cat, setCat }) => {

    const icons = icon('', type);
    const onClick = (value) => {
        setCategory(value);
        setCat(false);
    };

    return (
        <div className={`absolute top-0 left-0 w-full h-screen z-10 flex justify-center items-center`}>
            <div className={`w-2/3 gap-5 flex justify-center flex-col p-10 bg-white rounded-md shadow-2xl ${cat && 'show'}`}>
                <h2 className='text-center text-4xl font-semibold font-serif'>Select Category</h2>
                <div className='w-full gap-5 flex justify-center flex-wrap max-h-72 overflow-x-auto'>
                    {icons.map((item, index) => {
                        return (
                            <div
                                title={item.key}
                                className={`w-16 h-16 cursor-pointer rounded-circle flex items-center justify-center bg-gray hover:bg-slate-300 active:bg-lightYellow ${item.key == category ? 'bg-lightYellow hover:bg-lightYellow' : ''}`}
                                key={index}
                                onClick={() => { onClick(item.key) }}
                            >
                                <img src={item.value} alt={index.value} width={30} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Categories;
