import React from 'react'

import FolderIndigo from '../../../assets/icon/folder-indigo.svg'
import FolderPink from '../../../assets/icon/folder-pink.svg'
import FolderOrange from '../../../assets/icon/folder-orange.svg'

function folder({ folderClass, imgClass, spanClass }) {
    return (
        <>
            <div className='flex flex-wrap gap-3 mt-4'>
                <a className={`${folderClass}`} href="/landing-page">
                    <img className={`${imgClass}`} src={FolderIndigo} alt="folder" />

                    <span className={`${spanClass}`}>Landing pages</span>
                </a>

                <a className={`${folderClass}`} href="/apps">
                    <img className={`${imgClass}`} src={FolderPink} alt="folder" />

                    <span className={`${spanClass}`}>Apps</span>
                </a>

                <a className={`${folderClass}`} href="/prototypes">
                    <img className={`${imgClass}`} src={FolderOrange} alt="folder" />

                    <span className={`${spanClass}`}>Prototypes</span>
                </a>
            </div>
        </>
    )
}

export default folder