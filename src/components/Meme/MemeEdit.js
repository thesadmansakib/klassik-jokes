import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import style from "./MemeEdit.module.css";
import FormData from "form-data";
import axios from "axios";

const MemeEdit = (props) => {
    const meme = props.location.state;
    // console.log(meme);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const [submit, setSubmit] = useState(0);
    const [temid, setTemid] = useState("");
    const [text0, setText0] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");

    useEffect(() => {
        if (props.location.state) {
            setTemid(meme.id);
        }
    }, []);

    useEffect(() => {
        if (submit !== 0) {
            console.log("happenning");
            postJoke();
        }
    }, [submit]);

    const postJoke = async () => {
        let formData = new FormData();
        // prettier-ignore
        let boxarray = [
            { 'text': text0 },
            { 'text': text1 },
            { 'text': text2 },
            { 'text': text3 },
            { 'text': text4 },
        ];
        console.log(boxarray);

        formData.append("template_id", temid);
        formData.append("username", "KlassikJokes");
        formData.append("password", "klassik");
        formData.append("text0", "hello");
        formData.append("text1", "world");
        // formData.append("boxes[0]", boxarray[0]);
        // formData.append("boxes[1]", boxarray[1]);
        // formData.append("boxes[2]", boxarray[2]);
        // formData.append("boxes[3]", boxarray[3]);
        // formData.append("boxes[4]", boxarray[4]);
        formData.set("boxes", boxarray);
        // for (let i = 0; i < 5; i++) {
        //     formData.append("boxes" + "[" + i + "]", boxarray[i]);
        //     console.log(formData.boxes);
        // }
        // boxarray.map((object) => {
        //     console.log(object);
        //     formData.set("boxes[]", object);
        // });
        console.log(formData);

        const response = await axios({
            method: "post",
            url:
                "https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image",
            header: {
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        });
        console.log(response);
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

    const updateText2 = (e) => {
        setText2(e.target.value);
    };

    const updateText3 = (e) => {
        setText3(e.target.value);
    };

    const updateText4 = (e) => {
        setText4(e.target.value);
    };

    return (
        <div className={style.container}>
            {meme ? (
                <div className={style.input}>
                    <img src={meme.url} alt="Meme" />
                    {meme.box_count === 2 ? (
                        <div className={style.form}>
                            <form id="caption2" onSubmit={updateSubmit}>
                                <label htmlFor="caption2">
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
                                    placeholder="Bottom Text"
                                    value={text1}
                                    onChange={updateText1}
                                />
                                <button className={style.submit} type="submit">
                                    Generate Meme
                                </button>
                            </form>
                        </div>
                    ) : (
                        <>
                            {meme.box_count === 3 ? (
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
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div>Are you lost, babygirl?</div>
            )}
        </div>
    );
};

export default withRouter(MemeEdit);
