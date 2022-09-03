import React from 'react'
import Cube from '../../atoms/cube/Cube'

function Card() {
    return (
        <>
            <div className='card mt-4 bg-gradient-to-r from-blue-600 via-blue-600/90 to-blue-500/80 w-full rounded-lg shadow-sm shadow-slate-200 cursor-default hover:shadow-md hover:shadow-blue-200'>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <a href="/icon-design">
                            <h4 className='text-xl text-white font-semibold hover:text-gray-100'>icon-design</h4>
                        </a>
                        <Cube />
                    </div>

                    <span className='text-sm font-normal text-slate-100'>Material design icons by Google</span>

                    <div className='mt-10'>
                        <span className='text-white text-base'>CSS</span>
                    </div>
                </div>
            </div>

            <div className='card mt-4 bg-gradient-to-r from-blue-600 via-blue-600/90 to-blue-500/80 w-full rounded-lg shadow-sm shadow-slate-200 cursor-default hover:shadow-md hover:shadow-blue-200'>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <a href="/cool-theme">
                            <h4 className='text-xl text-white font-semibold hover:text-gray-100'>cool-theme</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className='text-sm font-normal text-slate-100'>A cool theme for visual Studio Code</span>

                    <div className='mt-10'>
                        <span className='text-white text-base'>JavaScript</span>
                    </div>
                </div>
            </div>

            <div className='card mt-4 bg-gradient-to-r from-blue-600 via-blue-600/90 to-blue-500/80 w-full rounded-lg shadow-sm shadow-slate-200 cursor-default hover:shadow-md hover:shadow-blue-200'>
                <div className='p-4'>

                    <div className='flex justify-between'>
                        <a href="/fira-cms">
                            <h4 className='text-xl text-white font-semibold hover:text-gray-100'>fira-cms</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className='text-sm font-normal text-slate-100'>Content management sistem with CodeIgniter</span>

                    <div className='mt-10'>
                        <span className='text-white text-base'>PHP</span>
                    </div>
                </div>
            </div>

            <div className='card mt-4 bg-gradient-to-r from-blue-600 via-blue-600/90 to-blue-500/80 w-full rounded-lg shadow-sm shadow-slate-200 cursor-default hover:shadow-md hover:shadow-blue-200'>
                <div className='p-4'>

                    <div className='flex justify-between'>
                        <a href="/fonts">
                            <h4 className='text-xl text-white font-semibold hover:text-gray-100'>fonts</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className='text-sm font-normal text-slate-100'>Font files available from Google Fonts</span>

                    <div className='mt-10'>
                        <span className='text-white text-base'>HTML</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card