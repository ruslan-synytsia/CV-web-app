import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import Menu from "../Menu/Menu";

function Layout() {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main className={style.container}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;