import React from "react";

function Slide({ img, description, title }) {
    return (
        <div className="Slide slide">
            {description ? (
                <div className="grid">
                    <div className="imageWrapper">
                        <img src={img} alt="" />
                    </div>
                    <div className="textContent">
                        <div className="innerTextContent">
                            {title.length > 2 ? <h2>{title}</h2> : null}
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="onlyImage">
                    <img src={img} alt="" />
                </div>
            )}
        </div>
    );
}

export default Slide;
