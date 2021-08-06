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

                <div><p id="abouttext">I’m Samer Saem Eldahr, a full stack web developer and <a href="https://www.samersaemeldahr.com" target="_blank" className="bio-links">audio visual artist</a> passionate about developing, designing, and innovating for the future. Leveraging a decade of experience in <a href="https://www.psychaleppo.com" target="_blank" className="bio-links">electronic music production</a> and art making with technical aptitude in cutting-edge web technologies and hands on experience in HTML, CSS, Javascript, make me a strong addition to any web development team. An independent and creative problem solver with a certificate in full stack web development from the University of Minnesota Coding Boot Camp, I’m excited to leverage my expertise to build visually inspiring and high-quality experiences, solve interesting problems, and more.</p></div>
            
            </section>
        </main>
    )
}