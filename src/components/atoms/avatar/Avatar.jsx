import React from 'react'
import Profile from '../../../assets/profile/profile.svg'

function Avatar({ avatarClass }) {
    return (
        <>
            <img className={`${avatarClass}`} src={Profile} alt="profile" />
        </>
    )
}

export default Avatar