import React, { useState } from "react";
import style from "./DrawerToogleButton.module.css";
import classNames from "classnames/bind";

const DrawerToogleButton = (props) => {
    const [toggleOn, setToggleOn] = useState(false);

    return (
        <button
            className={classNames(style.toggle, {
                [style.toggleMotion]: toggleOn,
            })}
            onClick={() => {
                setToggleOn(!toggleOn);
                props.click(toggleOn);
            }}
        >
            <div
                className={classNames(style.toggleLine, {
                    [style.toggleTop]: toggleOn,
                })}
            ></div>
            <div
                className={classNames(style.toggleLine, {
                    [style.toggleMiddle]: toggleOn,
                })}
            ></div>
            <div
                className={classNames(style.toggleLine, {
                    [style.toggleBottom]: toggleOn,
                })}
            ></div>
        </button>
    );
};

export default DrawerToogleButton;
