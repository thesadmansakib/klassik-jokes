import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Friends.module.css";
import axios from "axios";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

const Friends = () => {
    const [loading, setLoading] = useState(false);
    const [joke, setJoke] = useState("");
    const [fetching, setFetching] = useState(false);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [submit, setSubmit] = useState(0);

    useEffect(() => {
        if (submit !== 0) {
            setFetching(true);
            setLoading(true);
            getJoke();
        }
    }, [submit]);

    const getJoke = async () => {
        const response = await axios.get(
            `http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`
        );
        setLoading(false);
        setJoke(response.data.value.joke.replace(/&quot;/g, "'"));
    };

    const updateSubmit = (e) => {
        e.preventDefault();
        setSubmit(submit + 1);
    };
    const updateFirst = (e) => {
        setFirst(e.target.value);
    };

    const updateLast = (e) => {
        setLast(e.target.value);
    };

    const downloadImage = () => {
        htmlToImage
            .toBlob(document.getElementById("Joke"))
            .then(function (blob) {
                window.saveAs(blob, "Friend-Joke.png");
            });
    };

    return (
        <div className={style.container}>
            <form id="friend" onSubmit={updateSubmit} className={style.form}>
                <label htmlFor="friend">
                    <i>Who is awesome again?</i>
                </label>
                <input
                    type="text"
                    className={style.text}
                    placeholder="Title or First Name"
                    value={first}
                    onChange={updateFirst}
                />
                <input
                    type="text"
                    className={style.text}
                    placeholder="Full Name or Last Name"
                    value={last}
                    onChange={updateLast}
                    required
                />
                <button className={style.submit} type="submit">
                    Generate Joke
                </button>
            </form>
            {fetching ? (
                <>
                    {loading ? (
                        <div className={style.loadWrapper}>
                            <Load />
                        </div>
                    ) : (
                        <>
                            <div id="Joke" className={style.jokeWrapper}>
                                <div className={style.joke}>{joke}</div>
                            </div>
                            <button
                                className={style.download}
                                onClick={downloadImage}
                            >
                                Download as Image
                            </button>
                            <button className={style.navigator}>
                                <Link to="/">Go Back Home</Link>
                            </button>
                        </>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default withRouter(Friends);
