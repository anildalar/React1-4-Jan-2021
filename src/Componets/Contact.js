import React from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'

// Lets create RFC
export default function Contact() {
    //1.State/Variable

    //2. Functions

    //3. Return Statement return JSX code x= xml every must have ending tag
    return (
        <>  
            <Header />
            <main>
               <h1>Contact Page</h1>

                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
           </main>
           <Footer />
        </>
    )
}
