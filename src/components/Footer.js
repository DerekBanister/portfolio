import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';

var style = {
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    display: "block",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    backgroundColor: "black",
    color: "black",
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <a href="https://www.linkedin.com/in/derek-banister/" target="_blank" rel="noreferrer" class="icon">< GrLinkedin size={30} /></a>
                <a href="https://github.com/DerekBanister" target="_blank" rel="noreferrer" class="icon"> <GrGithub size={30} /> </a>
            </div>
        </div>
    )
}
export default Footer;