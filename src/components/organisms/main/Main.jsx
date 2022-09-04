import React from 'react'

import GitHubCalendar from 'react-github-calendar';
import Tab from '../../molecules/tab/Tab'
import Card from '../card/Card'

function Main() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 7;

        return contributions.filter(day => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
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
                            <Card />
                        </div>

                    </div>

                    <div className='mt-20 flex justify-center sm:hidden'>
                        <GitHubCalendar
                            username="danisec"
                            transformData={selectLastHalfYear}
                        />
                    </div>

                    <div className='hidden sm:mt-28 sm:flex sm:justify-center'>
                        <GitHubCalendar
                            username="danisec"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main