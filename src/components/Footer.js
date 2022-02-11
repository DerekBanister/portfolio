import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
var { SocialIcon } = require('react-social-icons');

var style = {
    backgroundColor: "#232323",
    borderTop: "1px solid #232323",
    textAlign: "center",
    padding: "10px",
    display: "block",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    padding: '10px',
    height: '50px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <SocialIcon url="https://www.linkedin.com/in/derek-banister/" bgColor="black" fgColor="white" target="_blank" />
                <SocialIcon url="https://github.com/DerekBanister" bgColor="black" fgColor="white" target="_blank" />
            </div>
        </div >
    )
}
export default Footer;