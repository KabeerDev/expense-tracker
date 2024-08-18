import React from 'react'
import { uppercaseFirst, icon } from '../../../utils/helper'

const ExpenseBar = ({ detail, onClick }) => {
    return (
        <div
            className={`flex justify-between items-center p-3 border-b border-b-slate-400 cursor-pointer hover:bg-slate-100`}
            onClick={onClick}
        >
            <div className='flex items-center gap-2 text-xl'>
                <div className='p-4 rounded-circle bg-gray'>
                    <img src={icon(detail?.category)} alt={`${uppercaseFirst(detail?.category)} icon`} />
                </div>
                {uppercaseFirst(detail?.category)}
            </div>
            <div className='text-2xl'>{detail.type == "expense" ? "-" + detail.amount : detail.amount}</div>
        </div>
    )
}

export default ExpenseBar
