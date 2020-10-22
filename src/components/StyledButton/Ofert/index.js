import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StyledButton({ icon, text }) {
    return (
        <div className="StyledButton">
            <div className="flex">
                {text}
                <FontAwesomeIcon icon={icon} />
            </div>
        </div>
    );
}

export default StyledButton;
