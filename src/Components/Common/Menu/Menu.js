import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Menu.module.css';

function Menu() {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(null);

    const menuItems = [
        { path: '/about', label: 'About me' },
        { path: '/projects', label: 'My projects' },
        { path: '/contacts', label: 'Contacts' }
    ];

    const mobileMenuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About me' },
        { path: '/projects', label: 'My projects' },
        { path: '/contacts', label: 'Contacts' }
    ];

    useEffect(() => {
        setCurrentURL(location.pathname);
    }, [location.pathname]);

    const getLiClassName = (pathname) => {
        return pathname === currentURL ? style.active : "";
    };

    return (
        <>
            <nav>
                <ul className={style.container}>
                    <li className={style.logo}><Link to={'/'}><img src={'./logo.png'} alt="Logo" /></Link></li>
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <Link to={menuItem.path} className={getLiClassName(menuItem.path)}>
                                {menuItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className={style.mobileMenu}>
                <input type="checkbox" name="menu" id="menu" />
                <div className={style.menuIcon}>
                    <img src="./menu.svg" alt="Menu" />
                </div>
                <div className={style.colOne}>
                    <ul className={style.menuList}>
                        <div className={style.wrapper}>
                            {mobileMenuItems.map((menuItem, index) => (
                                <li key={index}>
                                    <Link to={menuItem.path} className={getLiClassName(menuItem.path)}>
                                        {menuItem.label}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Menu;