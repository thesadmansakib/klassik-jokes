import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import random from "../images/random-joke.png";
import DadJoke from "../images/dad-joke.png";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <Link to="/random">
                <button className={style.btn}>
                    <img className={style.icon} src={random} alt="Random" />
                    Random Jokes
                </button>
            </Link>
            <Link to="/daddy">
                <button className={style.btn}>
                    Dad Jokes
                    <img className={style.icon} src={DadJoke} alt="Random" />
                </button>
            </Link>
        </div>
    );
};

export default withRouter(Home);
