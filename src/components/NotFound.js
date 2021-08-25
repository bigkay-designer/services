import React from 'react'
import {Link} from 'react-router-dom'
import './css/notfound.css'
function NotFound() {
    return (
        <div className="notFound__page">
             <main>
                <h1>Sorry, the page you requested could not be found.
                </h1>
                <div>
                    <p>It is possible that the address is incorrect or that the page no longer exists. Please <a href="/#contact__id">contact us</a> to let us know about the problem.</p>
                </div>
                <Link className="btn" to="/">Return to the home page</Link>
            </main>
        </div>
    )
}

export default NotFound
