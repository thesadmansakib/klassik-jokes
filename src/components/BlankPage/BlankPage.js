import React from "react";
import { withRouter } from "react-router";

const BlankPage = () => {
    return (
        <div>
            <p>Seems Like you are a bit lost.</p>
            <p>But aren't we all?</p>
        </div>
    );
};

export default withRouter(BlankPage);
