import React from 'react';
import Chart from './chart';

const Stats = ({ data }) => {
    return (
        <div className='flex lg:gap-20 gap-5 justify-center items-center flex-col lg:flex-row'>
            <div className='lg:w-1/4 w-full' style={{ height: '300px' }}>
                <Chart info={data} />
            </div>
            <div className="flex flex-col items-center xs:flex-row text-center">
                <div className='px-5 sm:px-10'>
                    <h2 className="title-font font-medium sm:text-4xl text-3xl">{data?.expenses}</h2>
                    <p className="leading-relaxed">Expenses</p>
                </div>
                <div className='px-5 sm:px-10'>
                    <h2 className="title-font font-medium sm:text-4xl text-3xl">{data?.income}</h2>
                    <p className="leading-relaxed">Income</p>
                </div>
                <div className='px-5 sm:px-10'>
                    <h2 className="title-font font-medium sm:text-4xl text-3xl">{data?.balance}</h2>
                    <p className="leading-relaxed">Balance</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
