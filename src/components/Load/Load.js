import React from "react";
import { withRouter } from "react-router";
import style from "./Load.module.css";

const Load = () => {
    return (
        <>
            <div className={style.spinner}>
                <div className={style.bounce1}></div>
                <div className={style.bounce2}></div>
                <div className={style.bounce3}></div>
            </div>
            <div className={style.loading}>Loading</div>
        </>
    );
};

export default withRouter(Load);
