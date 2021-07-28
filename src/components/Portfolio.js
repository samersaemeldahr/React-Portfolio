import React, { useState } from 'react';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Footer } from './Footer/Footer';


export function Portfolio() {

    const [page, setPage] = useState(<About/>)


    return (
        <div>
            <Header setPage={setPage}/>
            {page}
            <Footer />
        </div>
    )
}