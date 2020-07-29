import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Dark.module.css";
import axios from "axios";

const Dark = () => {
    const [loading, setLoading] = useState(true);
    const [joke, setJoke] = useState({});
    const [next, setNext] = useState(true);
    const [punchline, setPunchline] = useState(false);

    useEffect(() => {
        getJoke();
    }, [next]);

    const getJoke = async () => {
        const response = await axios.get(
            "https://sv443.net/jokeapi/v2/joke/Dark"
        );
        setLoading(false);
        setPunchline(false);
        setJoke(response.data);
    };

    return (
        <div className={style.container}>
            {loading ? (
                <>
                    <Load />
                </>
            ) : (
                <div
                    onClick={() => setPunchline(!punchline)}
                    className={style.jokeWrapper}
                >
                    {joke.type === "twopart" ? (
                        <div className={style.joke}>
                            {joke.setup} <br />
                            {punchline ? (
                                <div
                                    style={
                                        ({ marginTop: "10px" },
                                        { color: "#007049" })
                                    }
                                >
                                    {joke.delivery}
                                </div>
                            ) : (
                                <div style={{ marginTop: "10px" }}>
                                    <i style={{ color: "#007049" }}>
                                        Tap this card for the punchline..!!
                                    </i>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className={style.joke}>{joke.joke}</div>
                    )}
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

export default withRouter(Dark);
