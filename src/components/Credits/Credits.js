import React from "react";
import { withRouter } from "react-router";
import style from "./Credit.module.css";

const Credits = () => {
    return (
        <div className={style.container}>
            <p>
                This website uses the react framework bootstrapped with{" "}
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">
                    Create React App
                </a>
                .
            </p>
            <p>It uses five REST apis to generate the data.</p>
            <ul>
                <li>
                    <a href="https://github.com/15Dkatz/official_joke_api">
                        Official Joke Api
                    </a>{" "}
                    to generate the Random Jokes
                </li>
                <li>
                    {" "}
                    <a href="https://icanhazdadjoke.com/api">
                        icanhazdadjoke
                    </a>{" "}
                    to get all the dad jokes in the world{" "}
                </li>

                <li>
                    {" "}
                    <a href="https://api.imgflip.com/">Meme Generator Api</a> by
                    Imgflip for meme generation{" "}
                </li>
                <li>
                    {" "}
                    <a href="https://api.imgflip.com/">JokeApi</a> for the Dark
                    Jokes
                </li>
                <li>
                    {" "}
                    <a href="http://www.icndb.com/api/">
                        Internet Chuck Norris Database Api
                    </a>{" "}
                    for generating joke about friends{" "}
                </li>
            </ul>
            <p>
                {" "}
                If you have any suggestion or problem feel free to mail us{" "}
                <a href="mailto:klassik.jokes@gmail.com">
                    klassik.jokes@gmail.com
                </a>
                .
            </p>
            <p>&#169; The Sadman</p>
        </div>
    );
};

export default withRouter(Credits);
