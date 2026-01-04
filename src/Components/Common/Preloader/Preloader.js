import React from "react";
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.Preloader}>
            <img
                src={`${process.env.PUBLIC_URL}/preloader.gif`}
                alt="Preloader"
            />
        </div>
    )
}
export default Preloader;
