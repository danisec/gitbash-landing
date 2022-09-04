import React from 'react'
import GitHubCalendar from 'react-github-calendar';

function Activity() {
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
            <div className='mt-8 hidden sm:flex sm:justify-center'>
                <GitHubCalendar
                    username="danisec"
                />
            </div>

            <div className='mt-8 flex justify-center sm:hidden'>
                <GitHubCalendar
                    username="danisec"
                    transformData={selectLastHalfYear}
                />
            </div>
        </>
    )
}

export default Activity