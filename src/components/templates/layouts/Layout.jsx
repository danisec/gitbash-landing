import React from 'react'
import Navbar from "../../UI/organisms/navbar/Navbar";

import Aside from '../../UI/organisms/aside/Aside'
import Main from '../../UI/organisms/main/Main'

import Footer from '../../UI/organisms/footer/Footer'

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