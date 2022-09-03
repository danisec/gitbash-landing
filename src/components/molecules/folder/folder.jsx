import React from 'react'

import FolderIndigo from '../../../assets/icon/folder-indigo.svg'
import FolderPink from '../../../assets/icon/folder-pink.svg'
import FolderOrange from '../../../assets/icon/folder-orange.svg'

function folder() {
    return (
        <>
            <div className='flex flex-wrap gap-3 mt-4'>
                <a className='flex gap-2 bg-white p-2.5 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-300 hover:scale-105 hover:duration-300' href="/landing-page">
                    <img className='w-5 h-auto' src={FolderIndigo} alt="folder" />

                    <span className='text-base font-semibold text-gray-800'>Landing pages</span>
                </a>

                <a className='flex gap-2 bg-white p-2.5 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-300 hover:scale-105 hover:duration-300' href="/apps">
                    <img className='w-5 h-auto' src={FolderPink} alt="folder" />

                    <span className='text-base font-semibold text-gray-800'>Apps</span>
                </a>

                <a className='flex gap-2 bg-white p-2.5 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-300 hover:scale-105 hover:duration-300' href="/prototypes">
                    <img className='w-5 h-auto' src={FolderOrange} alt="folder" />

                    <span className='text-base font-semibold text-gray-800'>Prototypes</span>
                </a>
            </div>
        </>
    )
}

export default folder