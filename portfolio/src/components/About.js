import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "../images/me.jpg"
import '../styles/style.css';

const styles = {
    db: {
        borderRadius: "10%",
        width: "420px",
        height: "380px",
        padding: "30px",

    },
    color: {
        backgroundColor: "white"
    }
}
function About() {
    return (
        <div class="container" style={styles.color}>
            <div class="card-columns" style={styles.color}>
                <div class="card" style={styles.color}>
                    <div class="card-block hide-card justify-content-center" style={styles.color}>
                        <img src={me} class="card-img-top db" style={styles.db} alt="Me"></img>
                    </div>
                </div>

                <div class="card" style={styles.color}>
                    <div class="card-block" style={styles.color}>
                        <h1>About Me</h1>
                        <h5 class="card-title aboutme" style={styles.color}>I am a 26 year old full stack web developer who lives in the Bay Area. I am currently proficient in JavaScript; mainly React.Js, Node.Js, and MySQL/Mongo. I love to learn new things, work in teams, and solve problems. In my free time I enjoy watching sports, playing video games, and spending time with my wife and dog.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;