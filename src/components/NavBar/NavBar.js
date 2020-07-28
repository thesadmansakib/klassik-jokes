import React, { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../images/logo-smiley.png";
import logoText from "../images/logo.png";
import { NavLink } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import DrawerToogleButton from "../SideDrawer/DrawerToggleButton";
import BackDrop from "../BackDrop/BackDrop";

const NavBar = () => {
    const [hide, setHide] = useState(true);

    return (
        <div className={style.NavBar}>
            <div className={style.logoWrapper}>
                <img className={style.logo} src={logo} alt="Logo" />
                <img
                    className={style.logoText}
                    src={logoText}
                    alt="Klassik Jokes"
                />
            </div>

            <nav className={style.navigation}>
                <NavLink activeClassName={style.active} exact to="/">
                    Home
                </NavLink>
                <NavLink activeClassName={style.active} to="/meme">
                    Meme Generator
                </NavLink>
                <NavLink activeClassName={style.active} to="/dark">
                    Dark Jokes
                </NavLink>
                <NavLink activeClassName={style.active} to="/friends">
                    Joke About Friends
                </NavLink>
                <NavLink activeClassName={style.active} to="/credit">
                    Credits
                </NavLink>
            </nav>
            <DrawerToogleButton click={(toggleOn) => setHide(toggleOn)} />
            <SideDrawer display={!hide} />
            {!hide ? <BackDrop /> : null}
        </div>
    );
};

export default NavBar;
