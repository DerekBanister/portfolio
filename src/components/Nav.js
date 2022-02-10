// 21 react style
import React from 'react';
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
    },
    db: {
        borderRadius: "50%",
        width: "400px",
        height: "350px",
        padding: "10px",
    },
    aspire: {
        fontFamily: 'Cabin',
        fontStyle: "italic",
        opacity: "0.9",
        fontSize: "20px",
    },
    duck: {
        color: "white",
        margin: "auto",
        fontSize: "7vw",
    },
    techs: {
        marginTop: "100px",
        padding: "5px",
        color: "black",
        display: "inline-flex",
        height: "80px",
        border: "white, solid, 1px",
    },

    intro: {
        padding: "10px",
    },
    link: {
        color: "black",
    }
}

function Nav() {
    return (

        <div className="navvy" style={styles.color}>
            <h1 style={styles.duck}>
                <span>Derek Banister</span>
                <small style={styles.aspire}>Full Stack Web Developer</small>
            </h1>
            <div style={styles.intro}>
                <p>Thanks for visiting my page! I am a MERN Stack Developer that graduated UC Berkeley Extension's coding boot camp in December 2021.
                    <br></br>
                    <a href={resume} download="Resume.pdf.pdf" style={styles.link}>You can click here to download my resume.</a></p>
            </div>
            <div>
                <img src={me} style={styles.db} alt="Me"></img>
            </div>
            <div className="techs" style={styles.techs}>
                <br></br>
                <img src={js} alt="Js"></img>
                <img src={node} alt="Node"></img>
                <img src={react} alt="React"></img>
                <img src={mongo} alt="Mongo"></img>
            </div>
        </div>

    );
}

export default Nav;
