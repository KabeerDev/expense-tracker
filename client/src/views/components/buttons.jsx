import React, { useEffect } from 'react';
import Loader from '../../components/loader';
import { SuccessIcon } from '../../assets';

const Buttons = ({ value, isSubmitting, submitted = false }) => {
    return (
        <>
            {!isSubmitting && !submitted && (
                <input
                    type="submit"
                    className='w-full border-2 border-primary bg-primary rounded-md py-3 font-semibold cursor-pointer text-white hover:bg-transparent hover:text-primary mt-4'
                    value={value}
                />
            )}
            {isSubmitting && (
                <button
                    className='w-full border-2 border-primary bg-transparent rounded-md py-3 font-semibold cursor-pointer text-white mt-4 flex items-center justify-center'
                    disabled
                >
                    <Loader />
                </button>
            )}
            {submitted && (
                <button
                    className='w-full border-2 border-primary bg-transparent rounded-md py-3 font-semibold cursor-pointer text-white mt-4 flex items-center justify-center'
                    disabled
                >
                    <img src={SuccessIcon} alt="success" />
                </button>
            )}
        </>
    );
};

export default Buttons;
