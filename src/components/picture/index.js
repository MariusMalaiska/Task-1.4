import React from "react";
// import "./index.scss";


function Picture({ images, index }) {




    const classes = `Card--image`;

    return (
        <React.Fragment>
            {images.map(element => <div className={classes} key={element} style={{
                backgroundImage: `url(${element})`
            }}></div>)}


        </React.Fragment>
    );
}

export default Picture;