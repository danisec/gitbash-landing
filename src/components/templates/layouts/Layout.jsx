import React from 'react'
import Aside from '../../organisms/aside/Aside'
import Main from '../../organisms/main/Main'
import Footer from '../../organisms/footer/Footer'

function Layout() {
    return (
        <>
            <div className='block gap-0 md:grid md:grid-cols-2'>
                <Aside />
                <Main />
            </div>
            <Footer />
        </>
    )
}

export default Layout