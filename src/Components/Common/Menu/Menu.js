import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.css";

function Menu() {
  const close = useRef(null);
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(null);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contacts", label: "Contacts" },
  ];

  const mobileMenuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contacts", label: "Contacts" },
  ];

  const clickLink = () => {
    const inputEl = close.current;
    if (inputEl) {
      inputEl.checked = !inputEl.checked;
    }
  };

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
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.path}
                className={getLiClassName(menuItem.path)}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={style.mobileMenu}>
        <input type="checkbox" name="menu" id="menu" ref={close} />
        <div className={style.menuIcon}>
          <img
            src={`${process.env.PUBLIC_URL}/menu.svg`}
            alt="Menu"
          />
        </div>
        <div className={style.colOne}>
          <div className={style.wrapper}>
            <ul className={style.menuList}>
              {mobileMenuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.path}
                    className={getLiClassName(menuItem.path)}
                    onClick={clickLink}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
