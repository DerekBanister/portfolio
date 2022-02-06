import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import tvremote from "../images/popcorn1.gif"
import dungrunner from "../images/dungrunner.gif"
import ttb from "../images/ttb1.png"
import cat from "../images/catventure.gif"



const styles = {
    cardDeck: {
        margin: "10px",
        display: "flex",
        justifyContent: "center"
    },
    images: {
        width: "90%",
        height: "30vh",
        objectFit: "cover"
    },
    card2: {
        backgroundColor: "white",
        border: "solid 1px black",
    }
}

function Projects() {
    return (
        <div>
            <div class="card-columns" style={styles.card2}>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">TV Remote</h2>
                        <img style={styles.images} src={tvremote} alt="project1" class="card-img-top" />
                        <a class="card-text" href="https://github.com/DerekBanister/tvremote" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Tech Blog</h2>
                        <img style={styles.images} src={ttb} alt="TechBlog" class="card-img-top" />
                        <a class="card-text" href="https://github.com/DerekBanister/MVC-tech-blog" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Dungeon Run</h2>
                        <img style={styles.images} src={dungrunner} alt="DungRunner" class="card-img-top" />
                        <a class="card-text" href="https://github.com/DerekBanister/fullstack-browser-game" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
                <div class="card" style={styles.card2}>
                    <div class="card-body">
                        <h2 class="card-title">Catventure</h2>
                        <img style={styles.images} src={cat} alt="weather" class="card-img-top" />
                        <a class="card-text" href="https://github.com/DerekBanister/catventure-game" target="_blank" rel="noreferrer">
                            Github
                            Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;