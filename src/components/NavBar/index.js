import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
    { location: "/", label: "O Firmie" },
    { location: "/realizacje", label: "Realizacje" },
    { location: "/oferta", label: "Oferta" },
    { location: "/zielen-we-wnetrzach", label: "Zieleń we wnętrzach" },
    {
        location: "/system-dachow-zielonych-grs",
        label: "System dachów zielonych grs",
    },
    { location: "/kontakt", label: "kontakt" },
];

function NavBar(props) {
    const [menu, setMenu] = useState(false);
    const showMenuHandler = () => {
        setMenu(!menu);
    };
    return (
        <div className="Navbar">
            <div className="bar">
                <img
                    src={require("../../assets/logo GM v5.png")}
                    alt="logo Garden Master"
                />
                <div className="navSection">
                    {links.map((link) => {
                        return (
                            <NavLink
                                exact={link.location === "/" ? true : false}
                                to={link.location}
                                activeClassName="NavLinkActive"
                                className="NavLink"
                                key={link.location}
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="mobileMenuIndi">
                    <FontAwesomeIcon
                        onClick={() => showMenuHandler()}
                        className="icon"
                        icon={faBars}
                    />
                </div>
            </div>
            <div
                className="mobileMenu"
                style={{ maxHeight: menu ? "100vw" : "0" }}
            >
                <div className="navSection">
                    {links.map((link) => {
                        return (
                            <NavLink
                                exact={link.location === "/" ? true : false}
                                to={link.location}
                                activeClassName="NavLinkActive"
                                className="NavLink"
                                key={link.location}
                                onClick={() => {
                                    setMenu(false);
                                }}
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
