/**
 * Here what do we mean when we talk about Plain JS based function Component is using the 
 plain React createElement and other sort of methods to create the react UI.
 In the Same JS file we are writing HTML which is the best part of all.
 */

import React from "react";

function CarTile() {
    return(
        React.createElement('section', {}, 
            React.createElement('div', {}, 
                React.createElement('img', {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6InF-eqqrXQbDnYEu7BwJOlWv8JqdCtkPg&s"})
            ),
            React.createElement('div', {}, 
                React.createElement('img', {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4irH79AAy9E8q0uq9FCL4iAALeYRL8nT2Q&s"})
            )
        )
    );
}

export default CarTile;