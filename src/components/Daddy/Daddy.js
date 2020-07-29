import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Daddy.module.css";

import axios from "axios";

const Daddy = () => {
    const [loading, setLoading] = useState(true);
    const [joke, setJoke] = useState({});
    const [next, setNext] = useState(true);

    useEffect(() => {
        getJokes();
    }, [next]);

    const getJokes = async () => {
        const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        setLoading(false);
        setJoke(response.data);
    };
    return (
        <div className={style.container}>
            {loading ? (
                <>
                    <Load />
                </>
            ) : (
                <div className={style.jokeWrapper}>
                    <div className={style.joke}>{joke.joke}</div>
                </div>
            )}

            {loading ? null : (
                <div className={style.button}>
                    <button
                        className={style.jokeRefresh}
                        onClick={() => {
                            setLoading(true);
                            setNext(!next);
                        }}
                    >
                        Get Another Joke
                    </button>

                    <button className={style.navigator}>
                        <Link to="/">Go Back Home</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default withRouter(Daddy);
