import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./Meme.module.css";
import axios from "axios";

const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMemes();
    }, []);

    const getMemes = async () => {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
        setLoading(false);
    };

    return (
        <div className={style.container}>
            <button className={style.navigator}>
                <Link to="/">Go Back Home</Link>
            </button>
            {loading ? (
                <div style={{ textAlign: "center", alignSelf: "center" }}>
                    <Load />
                </div>
            ) : (
                <div className={style.meme}>
                    <i
                        style={{
                            display: "flex",
                            width: "100%",
                            margin: "10px",
                            justifyContent: "center",
                        }}
                    >
                        Select Your Meme From Below
                    </i>
                    {memes.map((meme) => (
                        <Link
                            key={meme.id}
                            to={{
                                pathname: "/meme/edit",
                                state: meme,
                            }}
                        >
                            <img src={meme.url} alt="meme" />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default withRouter(Meme);
