// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const styles = {
    color: {

        backgroundColor: "#00008b"
    }
}

function Nav() {
    return (

        <ul className="nav" style={styles.color}>
            <h1 class="duck">
                <span id="derek">Derek Banister</span>
                <small class="aspire">Full Stack Web Developer</small>
            </h1>
        </ul>
    );
}

export default Nav;
