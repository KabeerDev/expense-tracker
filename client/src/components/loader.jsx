import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
    return (
        <RotatingLines
            visible={true}
            height="26"
            width="26"
            color="grey"
            strokeWidth="5"
            strokeColor="#527AF6"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default Loader
