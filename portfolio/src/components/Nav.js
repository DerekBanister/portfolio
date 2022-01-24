// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

function Nav() {
    return (

        <ul className="nav">
            <h1 class="duck">
                <span id="derek">Derek Banister</span>
                <small class="text-light aspire">Full Stack Web Developer</small>
            </h1>
        </ul>
    );
}

export default Nav;
