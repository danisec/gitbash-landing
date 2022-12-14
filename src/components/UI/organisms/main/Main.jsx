import React from 'react'
import Tab from '../../molecules/tab/Tab'
import Card from '../card/Card'
import Activity from '../../molecules/activity/Activity'

function Main() {
    return (
        <>
            <div className='main layout mt-12 mb-12'>
                <div className='md:-ml-36 lg:-ml-64 xl:-ml-80'>

                    <div className='tab flex gap-6 overflow-auto'>
                        <Tab />
                    </div>

                    <hr className='mt-2'></hr>

                    <div className='mt-12'>
                        <h4 className='text-lg font-medium text-gray-800 cursor-default'>Pinned</h4>

                        <div className='block md:grid md:grid-cols-2 gap-6'>
                            <Card
                                cardClass={`card mt-4 bg-gradient-to-r from-blue-600 via-blue-600/90 to-blue-500/80 w-full rounded-lg shadow-sm shadow-slate-200 cursor-default hover:shadow-md hover:shadow-blue-200`}
                                titleClass={`text-xl text-white font-semibold hover:text-gray-100`}
                                descClass={`text-sm font-normal text-slate-100`}
                                tagClass={`text-white text-base`}
                            />
                        </div>

                    </div>

                    <div className='mt-20 sm:mt-20'>
                        <h4 className='text-lg font-medium text-gray-800 cursor-default'>Activity</h4>
                        <Activity />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main