import React from "react";
import style from "./SideDrawer.module.css";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

const sideDrawer = (props) => {
    return (
        <div
            className={classNames(style.SideDrawer, {
                [style.open]: props.display,
            })}
        >
            <nav className={style.navigation}>
                <NavLink
                    activeClassName={style.active}
                    exact
                    to="/klassik-jokes"
                >
                    Home
                </NavLink>
                <NavLink
                    activeClassName={style.active}
                    to="/klassik-jokes/meme"
                >
                    Meme Generator
                </NavLink>
                <NavLink
                    activeClassName={style.active}
                    to="/klassik-jokes/dark"
                >
                    Dark Jokes
                </NavLink>
                <NavLink
                    activeClassName={style.active}
                    to="/klassik-jokes/friends"
                >
                    Joke About Friends
                </NavLink>
                <NavLink
                    activeClassName={style.active}
                    to="/klassik-jokes/credit"
                >
                    Credits
                </NavLink>
            </nav>
        </div>
    );
};

export default sideDrawer;
