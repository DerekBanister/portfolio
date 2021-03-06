import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import tvremote from "../images/popcorn1.gif"
import dungrunner from "../images/dungrunner.gif"
import ttb from "../images/ttb.gif"
import cat from "../images/catventure.gif"



const styles = {
    images: {
        width: "90%",
        height: "30vh",
        objectFit: "cover",
        padding: "10px",
        marginBottom: "30px"
    },
    card1: {
        backgroundColor: "#232323",
    },
    card2: {
        display: "block",
        backgroundColor: "#232323",
        border: "solid 2px black",
    },
    text: {
        color: "black",
        fontSize: "14px"
    },
    projects: {
        textAlign: "center",
        backgroundColor: "#232323",
        fontSize: "35px",
        color: 'white',
        textDecoration: "underline",
        marginTop: "0px",
        marginBottom: "0px",
        padding: "0px",
    },
    link: {
        fontSize: "18px",
        color: "black",
    }
}

function Projects() {
    return (
        <div>
            <div>
                <h2 style={styles.projects}>My Work</h2>
            </div>
            <div class="card-columns" style={styles.card1}>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">TV Remote</h2>
                        <img style={styles.images} src={tvremote} alt="project1" class="card-img-top" />
                        <h3 class="card-text text-light" style={styles.text}>Random movie generator that displays 3 similar movies based on your search.
                            Also displays trending movies each week on landing page with a New York Times summary.</h3>
                        <br></br>
                        <a class="link" href="https://github.com/DerekBanister/tvremote" style={styles.link} target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Tech Blog</h2>
                        <img style={styles.images} src={ttb} alt="TechBlog" class="card-img-top" />
                        <h3 class="card-text text-light" style={styles.text}>Full stack web application created with Node.JS, MySQL, Express, Handlebars, BCrypt, and Sequelize. It is a basic tech blog with the ability to make C.R.U.D operations.
                            This application also allows you to create a profile/user, and utlizes secure password hashing using BCrypt.</h3>
                        <br></br>
                        <a class="link" style={styles.link} href="https://github.com/DerekBanister/MVC-tech-blog" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Dungeon Run</h2>
                        <img style={styles.images} src={dungrunner} alt="DungRunner" class="card-img-top" />
                        <h3 class="card-text text-light" style={styles.text}>A fullstack Browser Game with SQL backed player interaction. This game is a pixel art platformer that uses Phaser3, Tiled, and TexturePacker.</h3>
                        <br></br>
                        <a class="link" style={styles.link} href="https://github.com/DerekBanister/fullstack-browser-game" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Catventure</h2>
                        <img style={styles.images} src={cat} alt="weather" class="card-img-top" />
                        <h3 class="card-text text-light" style={styles.text}>This is a MERN stack application and my final project from the UC Berkeley Coding Bootcamp. Catventure! is a browser-based video game where you assemble a team of fantasy role-playing-game cats and go on a catventure! This videogame is built entirely in React.js with no external game engines.
                            The user can add cats to their team, find treasure and engage in JRPG-style turn-based combat.</h3>
                        <br></br>
                        <a class="link" style={styles.link} href="https://github.com/DerekBanister/catventure-game" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;