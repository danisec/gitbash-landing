import React from 'react'

import Twitter from '../../../assets/icon/twitter.svg'
import Instagram from '../../../assets/icon/instagram.svg'
import LinkedIn from '../../../assets/icon/linkedin.svg'

function SocialMedia({ socialClass }) {
    return (
        <>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img className={`${socialClass}`} src={Twitter} alt="twitter" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img className={`${socialClass}`} src={Instagram} alt="instagram" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img className={`${socialClass}`} src={LinkedIn} alt="linkedin" />
            </a>
        </>
    )
}

export default SocialMedia