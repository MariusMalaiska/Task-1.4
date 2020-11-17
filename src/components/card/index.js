import React, { useState } from "react";
import Picture from "../picture/index"
import "./index.scss";


function Card({ children, images, year, price, make, model }) {

    const [index, setIndex] = useState(0);

    const classes = `Card`;


    let listLeft = () => {
        let i = index - 1
        if (i < 0) {
            i = images.length - 1
        }
        setIndex(i)

    }

    let listRight = () => {
        let i = index + 1
        // setIndex(index )
        if (i === images.length) {
            i = 0
        }
        setIndex(i)
    }

    return (
        <div className={classes}>

            <div className="Card--picture" >
                <div className="Card--picture--carousel" style={{
                    transform: `translateX(-${index * 250}px)`
                }}>
                    {images.map(element =>
                        <Picture images={images} picture={element} index={index} key={element} />
                    )}
                </div>
                <div onClick={listRight} className="Arrow Right"></div>
                <div onClick={listLeft} className="Arrow Left"></div>
            </div>

            <div className="Card--info">
                <h3>{make}</h3>
                <p>Modelis: {model},<br />
                Metai: {year}</p>
                <p className="Card--info--price">{price} €</p>
                <p>{children}</p>
            </div>

        </div >
    );
}

export default Card;