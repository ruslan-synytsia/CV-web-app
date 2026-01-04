import style from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      header: "Chat Application",
      span: "Full-stack real-time communication platform",
      image: `${process.env.PUBLIC_URL}/chat.png`,
      description:
        "Real-time chat application designed to support public and private conversations with secure authentication.||I was responsible for frontend architecture, authentication flow, state management, and real-time data handling between the client and server. The project focuses on building a reliable, scalable interface for real-time communication.",
      stack:
        "React · Node.js · Express · MongoDB · WebSockets · JWT · REST API",
      link: "https://corporate-chat-app.vercel.app/",
    },
    {
      header: "Weather Application",
      span: "State management and API integration",
      image: `${process.env.PUBLIC_URL}/weather.png`,
      description:
        "Weather application built with React, focused on clean UI and predictable state management.||I implemented centralized state management using Redux Toolkit, integrated an external weather API, and designed multiple views for current conditions and short-term forecasts.",
      stack: "React · Redux Toolkit · REST API · OpenWeather API",
      link: "https://weather-app-f36y.onrender.com/",
    },
    {
      header: "Find Movies Application",
      span: "Frontend data flow and UI structure",
      image: `${process.env.PUBLIC_URL}/project.png`,
      description:
        "A React-based movie discovery application focused on fast search and clean user experience.||I was responsible for UI structure, state management with Redux Toolkit, and integration with an external movie database API. Originally designed for a Telegram Web App, the project emphasizes minimal UI, intuitive navigation, and quick access to detailed content.",
      stack: "React · Redux Toolkit · REST API · The Movie Database (TMDB)",
      link: "https://symphonious-paprenjak-fac495.netlify.app/",
    },
  ];

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
    <section className={style.Projects}>
      {projects.map((project, index) => {
        return (
          <article key={index} className={style.Projects_item}>
            <h2>{project.header}</h2>
            <span>{project.span}</span>
            <img
              className={style.Projects_item_img}
              src={project.image}
              alt=""
            />
            <p className={style.Projects_item_desc}>
              {splitAndRender(project.description)}
              <span className={style.Projects_item_desc_stack}>
                {project.stack}
              </span>
              <a
                className={style.Projects_item_link}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Projects;
