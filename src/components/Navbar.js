import React from 'react';
import './Navbar.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

function Navigation() {

    return (
        <div className="navbar bg-dark fixed-top navbar-expand-sm nav-displace">
            <ul className="navbar-nav">
                <li className="nav-item"><a href="/info" className="nav-link">Information</a></li>
                <li className="nav-item"><a href="/updates" className="nav-link">Update</a></li>
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            </ul>
        </div>
    )
}

export default Navigation;