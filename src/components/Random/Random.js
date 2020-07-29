import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Random.module.css";
import axios from "axios";

const Random = () => {
    const [loading, setLoading] = useState(true);
    const [joke, setJoke] = useState({});
    const [next, setNext] = useState(true);
    const [type, setType] = useState("general");
    const [punchline, setPunchline] = useState(false);

    useEffect(() => {
        const getJokes = async () => {
            const response = await axios.get(
                `https://official-joke-api.appspot.com/jokes/${type}/random`
            );
            setLoading(false);
            setPunchline(false);
            setJoke(response.data[0]);
        };
        getJokes();
    }, [next, type]);

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
                    <div className={style.joke}>
                        {joke.setup} <br />
                        {punchline ? (
                            <div
                                style={
                                    ({ marginTop: "10px" },
                                    { color: "#007049" })
                                }
                            >
                                {joke.punchline}
                            </div>
                        ) : (
                            <div style={{ marginTop: "10px" }}>
                                <i style={{ color: "#007049" }}>
                                    Tap this card for the punchline..!!
                                </i>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {loading ? null : (
                <div className={style.button}>
                    <button
                        className={style.jokeRefresh}
                        onClick={() => {
                            setLoading(true);
                            setType("general");
                            setNext(!next);
                        }}
                    >
                        Get Another Joke
                    </button>
                    <button
                        className={style.jokeRefresh}
                        onClick={() => {
                            setLoading(true);
                            setType("knock-knock");
                            setNext(!next);
                        }}
                    >
                        Get a Knock-Knock Joke
                    </button>
                    <button
                        className={style.jokeRefresh}
                        onClick={() => {
                            setLoading(true);
                            setType("programming");
                            setNext(!next);
                        }}
                    >
                        Get a Programming Joke
                    </button>

                    <button className={style.navigator}>
                        <Link to="/">Go Back Home</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default withRouter(Random);
