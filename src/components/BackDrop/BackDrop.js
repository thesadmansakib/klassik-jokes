import React from "react";
import style from "./BackDrop.module.css";

const backdrop = (props) => (
    <div className={style.backdrop} onClick={props.backClick} />
);

export default backdrop;
