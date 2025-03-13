import React from "react";

function Default() {
    return(
        <div>
            <h1>Here we use export default syntax.</h1>
        </div>
    );
}

export const Named1 = () => {
    return(
        <div>
            <h1>So we have used Default and Named being exported from same files.</h1>
        </div>
    );
}

export default Default