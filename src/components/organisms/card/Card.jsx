import React from 'react'
import Cube from '../../atoms/cube/Cube'

function Card({ cardClass, titleClass, descClass, tagClass }) {
    return (
        <>
            <div className={`${cardClass}`}>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <a href="/icon-design">
                            <h4 className={`${titleClass}`}>icon-design</h4>
                        </a>
                        <Cube />
                    </div>

                    <span className={`${descClass}`}>Material design icons by Google</span>

                    <div className='mt-10'>
                        <span className={`${tagClass}`}>CSS</span>
                    </div>
                </div>
            </div>

            <div className={`${cardClass}`}>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <a href="/cool-theme">
                            <h4 className={`${titleClass}`}>cool-theme</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className={`${descClass}`}>A cool theme for visual Studio Code</span>

                    <div className='mt-10'>
                        <span className={`${tagClass}`}>JavaScript</span>
                    </div>
                </div>
            </div>

            <div className={`${cardClass}`}>
                <div className='p-4'>

                    <div className='flex justify-between'>
                        <a href="/fira-cms">
                            <h4 className={`${titleClass}`}>fira-cms</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className={`${descClass}`}>Content management sistem with CodeIgniter</span>

                    <div className='mt-10'>
                        <span className={`${tagClass}`}>PHP</span>
                    </div>
                </div>
            </div>

            <div className={`${cardClass}`}>
                <div className='p-4'>

                    <div className='flex justify-between'>
                        <a href="/fonts">
                            <h4 className={`${titleClass}`}>fonts</h4>
                        </a>

                        <Cube />
                    </div>

                    <span className={`${descClass}`}>Font files available from Google Fonts</span>

                    <div className='mt-10'>
                        <span className={`${tagClass}`}>HTML</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card