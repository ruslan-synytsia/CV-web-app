import React from 'react';
import style from './About.module.css';

function About() {
    const about = {
        history: 'I have been working with programming and the web for many years, starting from early experimentation and evolving into modern web development.//I built my first website in 1997 using early HTML standards. Since then, my focus has gradually shifted toward JavaScript and modern frontend technologies.//Since 2020, I have been working with JavaScript, and since 2021 — with React./In 2022, I built my first full MERN application, including real-time communication using WebSockets.//Today, I continue to deepen my expertise in modern web development and related technologies.',
        goals: 'I focus on building clean, functional, and well-structured user interfaces with a strong emphasis on user experience.//I am motivated by real-world projects, meaningful products, and continuous professional growth./I am particularly interested in working within a strong team environment, contributing to production-level solutions and learning from experienced professionals.',
        interests: 'Outside of work, I enjoy cycling, following technology-related podcasts, and spending time in nature with my family.',
        qualities: ' Strong sense of responsibility and commitment to delivering results./ Independent problem-solver, capable of working effectively with limited external resources./ Analytical mindset and calm decision-making, even in complex or uncertain situations./ Persistence in finding optimal solutions, while remaining flexible and open to compromise./ Team-oriented approach with a focus on quality, reliability, and continuous improvement.',
        skills: 'HTML/CSS/JS/React/Redux/Node.js/REST API/Express/Mongoose/MongoDB/WebPack/Git/Figma'
    };

    const stringToList = (str, tag) => {
        const arr = str.split('/');
        if (tag === 'li') {
            return arr.map((paragraph, index) => <li key={index}>{paragraph}</li>)
        } else {
            return arr.map((paragraph, index) => <span key={index}>{paragraph}</span>);
        }
    }

    return (
        <section className={style.About}>
            <article className={style.About_history}>
                <h2>My history</h2>
                <p>
                    {stringToList(about.history)}
                </p>
            </article>
            <article className={style.About_skills}>
                <h2>Skills</h2>
                <ul>
                    {stringToList(about.skills, 'li')}
                </ul>
            </article>
            <article className={style.About_goals}>
                <h2>Motivation and goals</h2>
                <p>
                    {stringToList(about.goals)}
                </p>
            </article>
            <article className={style.About_qualities}>
                <h2>Personal qualities</h2>
                <ul>
                    {stringToList(about.qualities, 'li')}
                </ul>
            </article>
            <article className={style.About_hobbies}>
                <h2>Interests and hobbies</h2>
                <p>
                    {stringToList(about.interests)}
                </p>
            </article>
        </section>
    )
};

export default About;