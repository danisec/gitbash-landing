import React from 'react'

import Twitter from '../../../assets/icon/twitter.svg'
import Instagram from '../../../assets/icon/instagram.svg'
import LinkedIn from '../../../assets/icon/linkedin.svg'

function SocialMedia() {
    return (
        <>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img className='w-6 ms:w-7 h-auto' src={Twitter} alt="twitter" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img className='w-6 ms:w-7 h-auto' src={Instagram} alt="instagram" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img className='w-6 ms:w-7 h-auto' src={LinkedIn} alt="linkedin" />
            </a>
        </>
    )
}

export default SocialMedia