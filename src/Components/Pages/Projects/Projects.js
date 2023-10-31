import React from 'react';
import style from './Projects.module.css';

function Projects() {
    const projects = [
        {
            header: "Chat Application",
            image: "./chat.png",
            description: "This simple Fullstack application was created based on MERN.</br>The application is written in three parts: client, authentication server (REST) and chat server (WebSockets).</br>First, the authentication process occurs - recording a new user in the database and sending the server cookies (HttpOnly) with access tokens in two options: accessToken&refreshToken or only accessToken to the client, depending on the state of the AutoLogin component (true/false).</br>Access to the protected chat resource remains open only as long as the Access Token is valid.</br>The interaction between the client and the chat server is carried out using the socket.io library on the secure page <b>/home</b>.</br>The chat server application implements the ability to exchange messages, like between all chat participants in Public Chat, and private chat rooms.</br>In this FullStack application, the basic functionality is intentionally implemented in order to demonstrate the implementation, the above technologies and libraries.",
            link: "https://corporate-chat-app.vercel.app/"
        },
        {
            header: "Weather Application",
            image: "./weather.png",
            description: "This Single Page Application was created using React.",
            link: "https://weather-app-f36y.onrender.com/"
        },
        {
            header: "Find Movies Application",
            image: "./project.png",
            description: "This Single Page Application was created using React.",
            link: "https://symphonious-paprenjak-fac495.netlify.app/"
        },
        {
            header: "Travel Blog Template",
            image: "./project-1.png",
            description: "This html template was created using HTML&CSS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/travel-template/"
        },
        {
            header: "Bouncy Template",
            image: "./project-2.png",
            description: "This html template was created using HTML&CSS and JS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/bouncy-template/"
        },
        {
            header: "JS Game Application",
            image: "./project-3.png",
            description: "This JS application was created using HTML&CSS and JS Canvas.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/hangman-game/"
        },
        {
            header: "JS Calculator",
            image: "./project-4.png",
            description: "This html template was created using HTML&CSS and JS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/calculator/"
        }
    ];

    return (
        <section className={style.Projects}>
            {projects.map((project, index) => {
                return (
                    <article key={index} className={style.Projects_item}>
                        <h2>{project.header}</h2>
                        <img className={style.Projects_item_img} src={project.image} alt=""/>
                        <p className={style.Projects_item_desc}>{project.description}</p>
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
