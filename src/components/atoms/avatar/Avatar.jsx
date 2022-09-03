import React from 'react'
import Profile from '../../../assets/profile/profile.svg'

function Avatar() {
    return (
        <>
            <img className='w-9 rounded-full' src={Profile} alt="profile" />
        </>
    )
}

export default Avatar