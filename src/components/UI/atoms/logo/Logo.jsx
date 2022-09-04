import React from 'react'
import logo from '../../../../assets/logo/logo.svg'

function Logo({ logoName }) {
    return (
        <>
            <img src={logo} alt="logo" />
            <span className='mt-0.5 font-semibold text-gray-900 text-xl'>
                {logoName}
            </span>
        </>
    )
}

export default Logo