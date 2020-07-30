import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./MemeEdit.module.css";
import FormData from "form-data";
import axios from "axios";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

const MemeEdit = (props) => {
    const meme = props.location.state;
    // console.log(meme);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [image, setImage] = useState("");
    const [submit, setSubmit] = useState(0);
    const [temid, setTemid] = useState("");
    const [text0, setText0] = useState("");
    const [text1, setText1] = useState("");

    // const [text2, setText2] = useState(" ");
    // const [text3, setText3] = useState(" ");
    // const [text4, setText4] = useState(" ");

    useEffect(() => {
        if (props.location.state) {
            setTemid(meme.id);
        }
    }, []);

    useEffect(() => {
        if (submit !== 0) {
            setFetching(true);
            setLoading(true);
            postJoke();
        }
    }, [submit]);

    const postJoke = async () => {
        let formData = new FormData();

        //prettier-ignore;
        // let boxarray = [
        //     { text: text0 },
        //     { text: text1 },
        //     { text: text2 },
        //     { text: text3 },
        //     { text: text4 },
        // ];
        // console.log(boxarray);
        // formData.set("boxes", boxarray);

        formData.append("template_id", temid);
        formData.append("username", "KlassikJokes");
        formData.append("password", "klassik");
        formData.append("text0", text0);
        formData.append("text1", text1);

        const response = await axios({
            method: "post",
            url:
                "https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        });
        setLoading(false);
        console.log(response);
        setImage(response.data.data.url);
        console.log(image);
    };

    const updateSubmit = (e) => {
        e.preventDefault();
        setSubmit(submit + 1);
    };

    const updateText0 = (e) => {
        setText0(e.target.value);
    };

    const updateText1 = (e) => {
        setText1(e.target.value);
    };

    // const updateText2 = (e) => {
    //     setText2(e.target.value);
    // };
    // const updateText3 = (e) => {
    //     setText3(e.target.value);
    // };
    // const updateText4 = (e) => {
    //     setText4(e.target.value);
    // };

    const downloadImage = () => {
        htmlToImage
            .toBlob(document.getElementById("updated"))
            .then(function (blob) {
                window.saveAs(blob, "klassik-meme.png");
            });
    };

    return (
        <div className={style.container}>
            {meme ? (
                <div className={style.input}>
                    <p style={{ color: "red" }}>
                        * Please do not manually refresh this page, all progress
                        will be lost *
                    </p>
                    {meme.box_count === 2 ? (
                        <div className={style.inputbox}>
                            <img
                                className={style.mimage}
                                src={meme.url}
                                alt="Meme"
                            />
                            <form
                                className={style.form}
                                id="caption2"
                                onSubmit={updateSubmit}
                            >
                                <label htmlFor="caption2">
                                    <i>
                                        Input Caption Below (Atleast the bottom
                                        text is required)
                                    </i>
                                </label>
                                <div className={style.textWrapper}>
                                    <input
                                        type="text"
                                        className={style.text}
                                        placeholder="Top Text"
                                        value={text0}
                                        onChange={updateText0}
                                    />
                                    <input
                                        type="text"
                                        className={style.text}
                                        placeholder="Bottom Text"
                                        value={text1}
                                        onChange={updateText1}
                                        required
                                    />
                                </div>
                                <button className={style.submit} type="submit">
                                    Generate Meme
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className={style.Alternative}>
                            <div className={style.appology}>
                                <p>
                                    Sorry Ladies and Gentlemen, We can only do
                                    upto two caption memes right now.
                                    Unfortunately you have selected a meme that
                                    has more than two caption box. We are
                                    working hard to implement the feature of
                                    adding more caption box and hopefully will
                                    introduce it as soon as possible.Hang in
                                    there Till then, will you?
                                </p>
                                <p>
                                    Alternatively you can download the empty
                                    template below and add caption on your own
                                    if you feel like it. Click on the image to
                                    download.
                                </p>
                            </div>
                            <a href={meme.url} download>
                                <img
                                    className={style.mimage}
                                    src={meme.url}
                                    alt="Empty Template"
                                />
                            </a>
                            {/* {meme.box_count === 3 ? (
                                <div className={style.form}>
                                    <form id="caption3" onSubmit={updateSubmit}>
                                        <label htmlFor="caption3">
                                            <i>Input Caption Below</i>
                                        </label>
                                        <input
                                            type="text"
                                            className={style.text}
                                            placeholder="Top Text"
                                            value={text0}
                                            onChange={updateText0}
                                        />
                                        <input
                                            type="text"
                                            className={style.text}
                                            placeholder="Middle Text"
                                            value={text1}
                                            onChange={updateText1}
                                        />
                                        <input
                                            type="text"
                                            className={style.text}
                                            placeholder="Bottom Text"
                                            value={text2}
                                            onChange={updateText2}
                                        />
                                        <button
                                            className={style.submit}
                                            type="submit"
                                        >
                                            Generate Meme
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    {" "}
                                    {meme.box_count === 4 ? (
                                        <div>4</div>
                                    ) : (
                                        <div>5</div>
                                    )}
                                </>
                            )} */}
                        </div>
                    )}
                </div>
            ) : (
                <div className={style.refresh}>
                    <p>Are you lost, babygirl?</p>
                    <p>
                        If you have just refreshed your page while editing your
                        meme, we warned you mate!
                    </p>
                    <p>
                        Here is a link back to the{" "}
                        <Link to="/meme">meme generator page</Link>
                    </p>
                </div>
            )}
            {fetching ? (
                <div className={style.output}>
                    <p>Generated Meme will appear below</p>
                    {loading ? (
                        <div className={style.loadWrapper}>
                            <Load />
                        </div>
                    ) : (
                        <div className={style.modified}>
                            <p>Click on the Meme to Download</p>
                            <div>
                                <img
                                    id="updated"
                                    onClick={downloadImage}
                                    className={style.final}
                                    src={image}
                                    alt="Modified Meme"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default withRouter(MemeEdit);
