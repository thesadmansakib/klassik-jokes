import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Friends.module.css";
import axios from "axios";

const Friends = () => {
    const [loading, setLoading] = useState(false);
    const [joke, setJoke] = useState({});
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
        setJoke(response.data.value);
    };

    const updateSubmit = (e) => {
        e.preventDefault();
        setSubmit(submit + 1);
    };
    const updateFirst = (e) => {
        setFirst(e.target.value);
        console.log(first);
    };

    const updateLast = (e) => {
        setLast(e.target.value);
        console.log(last);
    };

    return (
        <div className={style.container}>
            <form onSubmit={updateSubmit} className={style.form}>
                <input
                    type="text"
                    className={style.text}
                    placeholder="First Name of Your Friend"
                    value={first}
                    onChange={updateFirst}
                    required
                />
                <input
                    type="text"
                    className={style.text}
                    placeholder="Last Name of Your Friend"
                    value={last}
                    onChange={updateLast}
                />
                <button className={style.submit} type="submit">
                    Generate Joke
                </button>
            </form>
            {fetching ? <> {loading ? <Load /> : <>{joke.joke}</>}</> : null}
        </div>
    );
};

export default withRouter(Friends);
