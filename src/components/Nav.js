// 21 react style
import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Button } from '../styles/Styles.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import me from "../images/me.jpg"
import js from "../images/js.png"
import node from "../images/node.png"
import react from "../images/react.jpg"
import mongo from "../images/mongo.png"
import resume from "../images/Resume.pdf.pdf"

const styles = {
    color: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        height: "900px",
    },
    db: {
        top: "0px",
        borderRadius: "50%",
        width: "320px",
        height: "320px",
        padding: "0px",
    },
    aspire: {
        fontFamily: 'Cabin',
        fontStyle: "italic",
        opacity: "0.9",
        fontSize: "20px",
    },
    duck: {
        color: "#383838",
        margin: "auto",
        fontSize: "7vw",
    },
    techs: {
        padding: "5px",
        color: "black",
        display: "inline-flex",
        height: "40px",
        border: "white, solid, 1px",
    },

    intro: {
        color: "#232323",
        padding: "0x",
    },
    link: {
        color: "black",
    }
}


function Nav() {

    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (

        <div className="navvy" style={styles.color}>
            <h1 style={styles.duck}>
                <span>Derek Banister</span>
                <div className="techs" style={styles.techs}>
                    <img src={js} alt="Js"></img>
                    <img src={node} alt="Node"></img>
                    <img src={react} alt="React"></img>
                    <img src={mongo} alt="Mongo"></img>
                </div>
            </h1>
            <div style={styles.intro}>
                <p>Thanks for visiting my page! I am a MERN Stack Developer that graduated UC Berkeley Extension's coding boot camp in December 2021.
                    <br></br>
                    <a href={resume} className="hover" download="Resume.pdf.pdf" style={styles.link}>You can click here to download my resume.</a>
                </p>
            </div>
            <div>
                <img src={me} style={styles.db} alt="Me"></img>
            </div>
            <Button>
                <FaArrowCircleDown onClick={scrollToBottom}
                    style={{ display: visible ? 'inline' : 'none' }} />
            </Button>

        </div>

    );
}

export default Nav;
