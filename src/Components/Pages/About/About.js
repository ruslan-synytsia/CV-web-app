import React from "react";
import style from "./About.module.css";

function About() {
  const about = {
    history:
      "I am a Frontend Developer focused on building clean, reliable, and user-friendly web applications.||I work primarily with modern JavaScript and React, paying close attention to application architecture, state management, and clear data flow. I value predictable behavior, maintainable code, and thoughtful UI decisions that improve the user experience.||I have hands-on experience building real-world projects involving real-time communication, API integration, and client-side state management. I am comfortable working independently, taking responsibility for my work, and collaborating within a team environment.||Currently, I am looking for an opportunity to join a professional team where I can contribute, grow, and continue developing as a Frontend Developer.",
    goals:
      "I focus on building clean, functional, and well-structured user interfaces with a strong emphasis on user experience.||I am motivated by real-world projects, meaningful products, and continuous professional growth.|I am particularly interested in working within a strong team environment, contributing to production-level solutions and learning from experienced professionals.",
    interests:
      "Outside of work, I enjoy cycling, following technology-related podcasts, and spending time in nature with my family.",
    qualities:
      " Strong sense of responsibility and commitment to delivering results.| Independent problem-solver, capable of working effectively with limited external resources.| Analytical mindset and calm decision-making, even in complex or uncertain situations.| Persistence in finding optimal solutions, while remaining flexible and open to compromise.| Team-oriented approach with a focus on quality, reliability, and continuous improvement.",
    skills:
      "HTML|CSS|JS|React|Redux|Node.js|REST API|Express|Mongoose|MongoDB|WebPack|Git|Figma",
  };

  const splitAndRender = (str, tag = "span") => {
    const arr = str.split("|");
    if (tag === "li") {
      return arr.map((paragraph, index) => (
        <li key={index}>{paragraph.trim() === "" ? "\u00A0" : paragraph}</li>
      ));
    }
    return arr.map((paragraph, index) => (
      <span key={index}>{paragraph.trim() === "" ? "\u00A0" : paragraph}</span>
    ));
  };

  return (
    <section className={style.About}>
      <article className={style.About_history}>
        <h2>About me</h2>
        <p>{splitAndRender(about.history)}</p>
      </article>
      <article className={style.About_skills}>
        <h2>Skills</h2>
        <ul>{splitAndRender(about.skills, "li")}</ul>
      </article>
      <article className={style.About_goals}>
        <h2>Motivation and goals</h2>
        <p>{splitAndRender(about.goals)}</p>
      </article>
      <article className={style.About_qualities}>
        <h2>Personal qualities</h2>
        <ul>{splitAndRender(about.qualities, "li")}</ul>
      </article>
      <article className={style.About_hobbies}>
        <h2>Interests and hobbies</h2>
        <p>{splitAndRender(about.interests)}</p>
      </article>
    </section>
  );
}

export default About;
