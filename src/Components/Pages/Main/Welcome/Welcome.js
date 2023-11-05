import React, {useState} from "react";
import style from "./Welcome.module.css";
import cx from 'classnames/bind';
import Typewriter from "../../../Common/Typewriter/Typewriter";
import { setStart } from '../../../../Redux/Reducers/initReducer';
import { useDispatch, useSelector } from 'react-redux';

const Welcome = () => {
    const dispatch = useDispatch();
    const isStarted = useSelector(state => state.init.isStarted);

    const [state, setState] = useState({
        invisible: false,
        display: true
    });

    setTimeout(() => {
        setState(prevState => ({ ...prevState, invisible: true }));
        setTimeout(() => {
            setState(prevState => ({ ...prevState, display: false }));
            dispatch(setStart(true));
        }, 1000);
    }, 15000);


    const changeVisible = () => {
        return (
            <div className={!state.invisible ? cx(style.Welcome) : state.display ? cx(style.Welcome, style.invisible) : cx(style.Welcome, style.invisible, style.display_none)}>
                <h1>
                    <Typewriter text={`Hi, my name is Ruslan./Welcome to my web application CV.`} />
                </h1>
            </div>
        )
    };

    if (!isStarted) {
        return changeVisible();
    } else {
        return null
    }
};

export default Welcome;
