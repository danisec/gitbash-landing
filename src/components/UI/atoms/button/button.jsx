import React from 'react'

function button({ buttonName }) {
    return (
        <>
            <button type="button" className='text-white font-medium bg-black hover:bg-gray-800 w-full rounded-md py-2.5'>
                {buttonName}
            </button>
        </>
    )
}

export default button