import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "../images/me.jpg"
import '../styles/style.css';

const styles = {
    db: {
        borderRadius: "10%",
        width: "450px",
        height: "400px",
        padding: "30px",
    },
    color: {
        backgroundColor: "#ADD8E6"
    },
    color2: {
        color: "#00008b"
    }
}
function About() {
    return (

        <div class="card-columns" style={styles.color}>
            <div class="card" style={styles.color}>
                <div class="card-block justify-content-center" style={styles.color}>
                    <img src={me} class="card-img-top db" style={styles.db} alt="Me"></img>
                </div>
            </div>

            <div class="card" style={styles.color}>
                <div class="card-block" style={styles.color}>
                    <h2 class="title" style={styles.color2}>About Me</h2>
                    <br></br>
                    <h2 class="card-title aboutme" style={styles.color2}>I am a 26 year old full stack web developer who lives in the Bay Area. I am currently proficient in JavaScript; mainly React.Js, Node.Js, and MySQL/Mongo.
                        I love to learn new things, work in teams, and solve problems. In my free time I enjoy watching sports, playing video games,
                        and spending time with my wife and dog.</h2>
                </div>
            </div>
        </div>

    )
}

export default About;