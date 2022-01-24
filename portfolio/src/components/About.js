import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "../images/me.jpg"
import '../styles/style.css';

const styles = {
    db: {
        borderRadius: "50%",
        width: "400px",
        height: "380px",
    }
}
function About() {
    return (
        <div class="container">
            <div class="card-columns">
                <div class="card hide-card">
                    <div class="card-block hide-card justify-content-center">
                        <img src={me} class="card-img-top db" style={styles.db} alt="Me"></img>
                    </div>
                </div>
                <div class="card">
                    <div class="card-block">
                        <h5 class="card-title aboutme">Thanks for visiting my page! I am 26 years old, born and raised in
                            Pleasanton, CA. I am a former law enforcement student and Contra Costa County Police Academy
                            graduate switching careers into the field of web development. I am incredibly excited to begin
                            this new journey in my life and acquire new skills to reach my goals. I enjoy playing
                            sports, watching movies, playing video games, and spending time with my dog Raider and my wife
                            Katrina.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;