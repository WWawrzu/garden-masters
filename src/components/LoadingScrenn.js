import React from "react";
import ReactLoading from "react-loading";
import "./style.scss";

function LoadingScrenn(props) {
    return (
        <div className="LoadingScreen">
            <ReactLoading
                type="spin"
                color={"#142b21"}
                height={60}
                width={60}
            />
        </div>
    );
}

export default LoadingScrenn;
