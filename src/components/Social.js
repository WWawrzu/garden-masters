import React from "react";
import {
    faFacebook,
    faInstagram,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Social(props) {
    return (
        <div className="socialLinks">
            <div className="ig">
                <a
                    href={"www.facebook.com/GardenMaster-158136844781849"}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="fb">
                <a href={"www.instagram.com/garden.master"} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            <div className="pin">
                <a
                    href={"www.pl.pinterest.com/gardenmasterpolska"}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
            </div>
        </div>
    );
}

export default Social;
