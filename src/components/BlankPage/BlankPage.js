import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const BlankPage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <p>Seems Like you are a bit lost.</p>
            <p>But aren't we all?</p>
            <p>
                You can go back home, <Link to="/">Here</Link>.{" "}
            </p>
        </div>
    );
};

export default withRouter(BlankPage);
