import { Projects } from '../Projects/Projects';
import { About } from '../About/About';
import { Resume } from '../Resume/Resume';
import { Contact } from '../Contact/Contact';
import './Header.css'

export function Header(props) {


    return (

        /*html*/<header>
            
            <nav>
            <h1 class="name-title" >Samer Saim Aldhr</h1>
                <ul>
                    <a href='#' onClick={() => props.setPage(<About />)} class="nav-links">About</a>
                    <a href='#' onClick={() => props.setPage(<Projects />)} class="nav-links">Projects</a>
                    <a href='#' onClick={() => props.setPage(<Contact setPage={props.setPage} />)} class="nav-links">Contact</a>
                    <a href='#' onClick={() => props.setPage(<Resume />)} class="nav-links">Resume</a>
                </ul>
            </nav>
        </header>
    )
}