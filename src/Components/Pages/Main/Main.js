import React from "react";
import { Link } from "react-router-dom";
import style from "./Main.module.css";

function Main() {
  return (
    <>
      <section className={style.Main}>
        <div className={style.Main_content}>
          <div className={style.Main_content_img}>
            <img
              src={`${process.env.PUBLIC_URL}/avatar.png`}
              alt="Avatar"
            />
          </div>
          <div className={style.Main_content_content}>
            <h2>Frontend Developer</h2>
            <h1>Ruslan Synytsia</h1>
            <p>
              Frontend Developer focused on building clean, responsive, and
              user-friendly web applications.
              <br />I work with modern JavaScript, React, and related
              technologies, with experience in state management, API
              integration, and real-time interfaces. I value clean architecture,
              clear communication, and continuous improvement.
              <br />
              <br />
              <Link to="/projects">Explore my work</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
