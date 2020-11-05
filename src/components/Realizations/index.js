import React from "react";
import Footer from "../Footer";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import { Link, useRouteMatch } from "react-router-dom";

function Realizations(props) {
    const subSites = [
        {
            title: "Projekty",
            image: require("../../assets/realizations/thumbnails/projekty.jpg"),
            url: "projekty",
        },
        {
            title: "Wykonawstwo",
            image: require("../../assets/realizations/thumbnails/wykonawstwo.jpeg"),
            url: "wykonawstwo",
        },
        {
            title: "Inwentaryzacje",
            image: require("../../assets/realizations/thumbnails/inwentaryzacje.png"),
            url: "inwentaryzacje",
        },
        {
            title: "Analiza i Nadzór",
            image: require("../../assets/realizations/thumbnails/analiza_nadzor.png"),
            url: "analiza_i_nadzor",
        },
    ];
    let match = useRouteMatch();
    return (
        <ReactFullpage
            {...fullPageSettings}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="Realizations bg section fp-auto-height-responsive">
                            <div className="flex">
                                <div className="grid">
                                    {subSites.map((tile) => (
                                        <Link
                                            to={`${match.url}/${tile.url}`}
                                            key={tile.url}
                                        >
                                            <div className="tiles">
                                                <img src={tile.image} alt="" />
                                                <div className="title">
                                                    <h2>{tile.title}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default Realizations;
