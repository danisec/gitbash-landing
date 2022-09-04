import React from 'react'
import SocialMedia from '../../molecules/socialmedia/SocialMedia'
import Button from '../../atoms/button/button'
import Folder from '../../molecules/folder/folder'

import Avatar from '../../atoms/avatar/Avatar'
import Location from '../../../../assets/icon/location.svg'
import Link from '../../../../assets/icon/link.svg'

function Aside() {
    return (
        <>
            <aside className='sidebar layout mt-12 mb-12 bg-blue-100/10 sx:w-full md:w-8/12'>

                <div className='gap-6 sx:flex md:block'>

                    <div>
                        <Avatar avatarClass={`w-full sx:w-28 md:w-52`} />
                    </div>

                    <div className='mt-6'>
                        <h4 className='text-lg sm:text-xl font-semibold tracking-wide cursor-default'>Dani Aprilyanto</h4>

                        <span className='text-sm font-sans sm:text-base font-normal text-gray-500 cursor-default'>@daniaprilyanto</span>
                    </div>
                </div>

                <div className='mt-6'>
                    <p className='text-base sm:text-base font-normal cursor-default'>Hi 👋, I'm Dani. A passionate Front-end and Back-end developer. i'm currently learning <strong>React JS</strong>.</p>
                </div>

                <div className='mt-6 flex flex-wrap gap-4'>
                    <SocialMedia socialClass={`w-6 ms:w-7 h-auto`} />
                </div>

                <div className='mt-6'>
                    <Button buttonName={`Follow`} />
                </div>

                <div className='mt-6'>
                    <div className='flex items-center gap-2'>
                        <img className='w-5 h-auto ms:w-6' src={Location} alt="location" />

                        <span className='text-base font-medium text-gray-700 cursor-default'>Jakarta, Indonesia</span>
                    </div>

                    <div className='flex items-center gap-2 mt-3'>
                        <img className='w-5 h-auto ms:w-6' src={Link} alt="link" />

                        <a className='text-base font-medium text-gray-700 hover:text-blue-500 hover:underline' href="https://danisec.com" target="_blank" rel="noopener noreferrer">danisec.com</a>
                    </div>
                </div>

                <div className='folders mt-10'>
                    <h4 className='text-lg font-semibold cursor-default'>Folders</h4>
                    <Folder
                        folderClass={`flex gap-2 bg-white p-2.5 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-300 hover:scale-105 hover:duration-300'`}
                        imgClass={`w-5 h-auto`}
                        spanClass={`text-base font-semibold text-gray-800`} />
                </div>
            </aside>
        </>
    )
}

export default Aside