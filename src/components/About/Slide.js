import React from "react";

function Slide({ img, description, title }) {
    const onClickHandler = (e) => {
        let val = e.currentTarget.querySelector(".textContent").style.zIndex;
        e.currentTarget.querySelector(".textContent").style.zIndex =
            val > -1 ? -1 : 1;
        // console.log(e.currentTarget.querySelector(".textContent").style.zIndex);
    };

    return (
        <div className="Slide slide" onClick={onClickHandler}>
            <div className={`grid ${description ? "desc" : "noDesc"}`}>
                <div className="imageWrapper">
                    <img src={img} alt="" />
                    {description ? (
                        <div className={"textContent mobile"}>
                            <div className="innerTextContent">
                                {title.length > 2 ? <h2>{title}</h2> : null}
                                <p>{description}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div
                    className={`textContent desktop ${
                        description ? "" : "noDesc"
                    }`}
                >
                    {description ? (
                        <div className="innerTextContent">
                            {title.length > 2 ? <h2>{title}</h2> : null}
                            <p>{description}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Slide;
