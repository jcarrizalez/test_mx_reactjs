import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

/**
* Componente Simple
*/
const Header = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={require('../assets/images/github-header-white.png')} height="30" alt="Github Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <span className="text-white-50">Github Api Test</span>
            </div>
            <div className="collapse navbar-collapse">
                <Search />
            </div>
        </nav>
    </header>
);  
  
export default Header;