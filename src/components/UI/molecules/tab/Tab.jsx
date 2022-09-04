import React from 'react'

function Tab() {
    return (
        <>
            <button className='bg-gray-200/60 py-2 px-4 rounded-lg text-base font-medium text-gray-800' id='overview'>
                Overview
            </button>

            <button className='hover:bg-gray-200/60 py-2 px-4 hover:rounded-lg text-base font-normal text-gray-800' id='repositories'>
                Repositories
            </button>

            <button className='hover:bg-gray-200/60 py-2 px-4 hover:rounded-lg text-base font-normal text-gray-800' id='project'>
                Project
            </button>
        </>
    )
}

export default Tab