import React from 'react'
import Navbar from "../../organisms/navbar/Navbar";

import Aside from '../../organisms/aside/Aside'
import Main from '../../organisms/main/Main'

import Footer from '../../organisms/footer/Footer'

function Layout() {
    return (
        <>
            <Navbar />
            <div className='block gap-0 md:grid md:grid-cols-2'>
                <Aside />
                <Main />
            </div>
            <Footer />
        </>
    )
}

export default Layout