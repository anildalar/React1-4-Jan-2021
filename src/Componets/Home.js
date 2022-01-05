import React, { useState } from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'

//RFC React Functional Compoent
function Home() {
    //1. State/Variable
    var name = 'Anil'//Simple Variable

    //HOOK Variable
    const [surname, setSurname] = useState('DOLLOR')

    //2. Functions


    //3. Return Statement
    return (
        <>
           <Header /> 
           <main>
               <h1>Home Page</h1>

                <h2>Hello {name} {surname} App Compoent</h2>

                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
           </main>
           <Footer />
        </>
    )
}

export default Home
