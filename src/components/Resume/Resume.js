import React from 'react';
import './Resume.css'
import pdf from './Resume.pdf';

export function Resume() {
    return (
        <div class="cv">
            <p><a href={pdf} download="Samer Saem Eldahr Resume">Download my Resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>ES6~plus</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MongoDB, Mongoose</li>
                <li>MySQL, Sequelize</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h3>Languages</h3>
            <ul>
                <li>English</li>
                <li>Arabic</li>
            </ul>
            
        </div>
    )
}