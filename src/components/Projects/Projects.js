import React from "react";
import "./Projects.css";
import Fun from "./funtimes.jpg";
import Quiz from "./codequiz.jpg";
import Weather from "./weather.jpg";
import Wedding from "./wedding.png";
import Workout from "./workout.png";
import Tech from "./tech.png"

export function Projects() {
    return (
        <main id="projects-link" >
            <section>
                {/* <section>
                    <h1 id="projectsheader">Projects</h1>
                </section> */}

                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src={Fun} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Fun Times</b></h3>
                            <p class="card-text">This application helps the user find nearby breweries and restaurants. It combines two APIs Open Brewery DB and Documenu creating lists based on the city that a user enters into the search form.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://nicholasheld.github.io/breweries-team4/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/nicholasheld/breweries-team4" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Wedding} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Wedding Planner</b></h3>
                            <p class="card-text">This application is a wedding planner that helps the user organize and add details about their wedding.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://sheltered-river-46463.herokuapp.com/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/samersaemeldahr/Wedding-Planner" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Workout} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Workout Tracker</b></h3>
                            <p class="card-text">In this app you'll be able to view, create and track daily workouts. You'll also be able to log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of exercise.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://boiling-everglades-06609.herokuapp.com/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/samersaemeldahr/workout-tracker" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src={Tech} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Tech Blog</b></h3>
                            <p class="card-text">An application that builds a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://nameless-anchorage-28410.herokuapp.com/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/samersaemeldahr/Tech-Blog" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Quiz} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Code Quiz</b></h3>
                            <p class="card-text">This is a timed code quiz where the user gets multiple choice questions.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://samersaemeldahr.github.io/Code-Quiz/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/samersaemeldahr/Code-Quiz" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Weather} alt="Card image cap" />
                        <div class="card-body">
                            <h3 class="card-title"><b>Weather Dashboard</b></h3>
                            <p class="card-text">An app that displays the current and future weather conditions for a specific city searched by the user.</p>
                            <p class="card-text"><small class="text-muted"><a href="https://samersaemeldahr.github.io/weather-dashboard/" target="_blank">Click to visit the deployed application</a></small></p>
                            <p class="card-text"><small class="text-muted"><a href="https://github.com/samersaemeldahr/weather-dashboard" target="_blank">Click to visit the GitHub repository</a></small></p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
};

// export default Projects