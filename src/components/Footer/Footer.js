import React from 'react';
import './Footer.css'

export function Footer() {
    return (        
    //     <footer>
    //     <ul>
    //         <li><a href='https://www.linkedin.com/in/samersaemeldahr'>linkedIn</a></li>
    //         <li><a href='https://github.com/samersaemeldahr'>Github</a></li>  
    //     </ul>
    // </footer>
    <main class="contact">
    <section id="contact-link">
        {/* <div >
            <h1 id="contactheader">Contact</h1>
        </div> */}

        <div class="links-list">
            <a href="mailto:samersaemeldahr@gmail.com" class="links"> samersaemeldahr@gmail.com </a>
            <a href="https://www.linkedin.com/in/samersaemeldahr/" target="_blank" class="links"> LinkedIn </a>
            <a href="https://github.com/samersaemeldahr" target="_blank" class="links"> GitHub </a>
        </div>
    </section>
</main>
            )
} 