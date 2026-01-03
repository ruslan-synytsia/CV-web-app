import React from 'react';
import style from './Projects.module.css';

function Projects() {
    const projects = [
        {
            header: "Chat Application",
            image: "./chat.png",
            description: "A full-stack real-time chat application built with the MERN stack.||The project includes separate authentication and chat servers, secure token-based authorization, and real-time communication via WebSockets.|Supports public chat rooms and private conversations.||The focus of the project was on architecture, authentication flow, and real-time data exchange.||React · Node.js · Express · MongoDB · WebSockets · JWT · REST API",
            link: "https://corporate-chat-app.vercel.app/"
        },
        {
            header: "Weather Application",
            image: "./weather.png",
            description: "A React-based weather application with centralized state management using Redux Toolkit.||The app fetches real-time weather data from an external API and presents it across multiple views, including current conditions and a 5-day forecast.||The project focuses on state management, API integration, and clean UI structure.||React · Redux Toolkit · REST API · OpenWeather API",
            link: "https://weather-app-f36y.onrender.com/"
        },
        {
            header: "Find Movies Application",
            image: "./project.png",
            description: "A React-based movie discovery application focused on fast search and clean user experience.||The app integrates with an external movie database API and allows users to filter content by genre, rating, and release year.|Originally designed for a Telegram Web App, the project emphasizes minimal UI, intuitive navigation, and quick access to detailed content.|React · Redux Toolkit · REST API · The Movie Database (TMDB)",
            link: "https://symphonious-paprenjak-fac495.netlify.app/"
        },
        {
            header: "Bouncy Template",
            image: "./project-2.png",
            description: "A responsive landing page template built with HTML, CSS, and JavaScript.||The project focuses on layout structure, animations, and visual composition, with an emphasis on clean typography and smooth interactions.|HTML · CSS · JavaScript",
            link: "http://resume-ruslan-synytsia.atwebpages.com/bouncy-template/"
        }
    ];

    const stringToList = (str, tag = 'span') => {
    const arr = str.split('|');
        if (tag === 'li') {
            return arr.map((paragraph, index) => <li key={index}>{paragraph}</li>)
        } else {
            return arr.map((paragraph, index) => <span key={index}>{paragraph}</span>);
        }
    }

    return (
        <section className={style.Projects}>
            {projects.map((project, index) => {
                return (
                    <article key={index} className={style.Projects_item}>
                        <h2>{project.header}</h2>
                        <img className={style.Projects_item_img} src={project.image} alt=""/>
                        <p className={style.Projects_item_desc}>{stringToList(project.description)}</p>
                        <div className={style.Projects_item_link}>
                            <a href={project.link} target={'blank_'}>To see</a>
                        </div>
                    </article>
                )
            })}
        </section>
    )
};

export default Projects;
