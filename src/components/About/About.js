import React from 'react';
import './About.css'
import portrait from './Portrait.jpg'
export function About() {
    return (
        <main className="about" id="about-link">
            <section className="center">
                <div className="image">
                    <img src={portrait} id="aboutimage" alt="Samer Saem ELdahr" />
                </div>

                <div><p id="abouttext">I’m Samer Saem Eldahr, a full stack web developer and audio visual artist. I leverage my experience in <a href="https://www.samersaemeldahr.com" target="_blank" className="bio-links">fine arts</a>, a decade in the international <a href="https://www.psychaleppo.com" target="_blank" className="bio-links">music production</a> industry, and a passion for coding to develop and design for the future. Creating and innovating is a big part of what I do everyday. When I am not coding, you'll find me producing a new song in my studio, trying out a new recipe in the kitchen, or building LEGOS with my son.</p></div>
            </section>
        </main>
    )
}