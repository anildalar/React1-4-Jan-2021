import React, { useState } from 'react'

export default function App() {
    //1. State/Variable
    var name = 'Anil'//Simple Variable

    //HOOK Variable
    const [surname, setSurname] = useState('DOLLOR')


    //2. Functions


    //3. Return Statement
    return (
        <div>
            <h2>Hello {name} {surname} App Compoent</h2>

            <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
}
