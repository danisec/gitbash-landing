import React from 'react'

import Logo from '../../atoms/logo/Logo'
import Search from '../../atoms/search/Search'
import Avatar from '../../atoms/avatar/Avatar'

function Navbar() {
    return (
        <>
            <nav className='layout bg-white py-6 lg:py-8 sx:py-6 top-0 sticky z-50 shadow-sm shadow-blue-100/50'>
                <div className='flex justify-between flex-wrap items-center'>

                    <div>
                        <a className='w-8 h-auto flex gap-2' href={'/'}>
                            <Logo />
                        </a>
                    </div>

                    <div className='hidden lg:block'>
                        <Search />
                    </div>

                    <div className='lg:flex gap-8 text-base font-semibold text-gray-600 hidden'>
                        <a className='hover:text-blue-500' href={'/forum'}>Forum</a>
                        <a className='hover:text-blue-500' href={'/marketplace'}>Marketplace</a>
                        <a className='hover:text-blue-500' href={'/jobs'}>Jobs</a>
                    </div>

                    <div>
                        <Avatar />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar