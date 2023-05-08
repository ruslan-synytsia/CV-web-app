import React, {useState} from "react";
import style from "./Welcome.module.css";
import cx from 'classnames/bind';
import Typewriter from "../../../Common/Typewriter/Typewriter";
import { setStart } from '../../../../Redux/Reducers/initReducer';
import { useDispatch } from 'react-redux';

const Welcome = () => {
    const dispatch = useDispatch();

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

    return changeVisible();
};

export default Welcome;