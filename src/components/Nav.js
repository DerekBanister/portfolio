// 21 react style

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import me from "../images/me.jpg"
import js from "../images/js.png"
import node from "../images/node.png"
import react from "../images/react.jpg"
import mysql from "../images/mysql.png"
import css from "../images/css.png"
import html from "../images/html.png"
import mongo from "../images/mongo.png"

const styles = {
    color: {
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
    },
    db: {
        borderRadius: "50%",
        width: "420px",
        height: "350px",
        padding: "20px",
    },
    aspire: {
        fontFamily: 'Cabin',
        fontStyle: "italic",
        opacity: "0.9",
        fontSize: "20px",
    },
    duck: {
        margin: "auto",
        fontSize: "7vw"
    },
    techs: {
        color: "black",
        display: "inline-flex",
        height: "80px",
    },
}

function Nav() {
    return (

        <div className="navvy" style={styles.color}>
            <h1 style={styles.duck}>
                <span>Derek Banister</span>
                <small style={styles.aspire}>Full Stack Web Developer</small>
            </h1>
            <div>
                <img src={me} style={styles.db} alt="Me"></img>
            </div>
            <div className="techs" style={styles.techs}>
                <img src={js} alt="Js"></img>
                <img src={node} alt="Node"></img>
                <img src={react} alt="React"></img>
                <img src={mysql} alt="Mysql"></img>
                <img src={html} alt="Html"></img>

            </div>
        </div>

    );
}

export default Nav;
