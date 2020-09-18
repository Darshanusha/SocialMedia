import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ml-2 mr-2" >
                    <Link className="navbar-brand" to="/">Social Media</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/" >Home</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;