import React from 'react';

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-dark bg-dark text-light">
            <a className="navbar-brand ms-3" href="#">
                Navbar
                <span className="badge bg-secondary ms-2">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;