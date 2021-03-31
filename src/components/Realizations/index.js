import React from "react";
import Footer from "../Footer";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import { Link, useRouteMatch } from "react-router-dom";

function Realizations(props) {
    const subSites = [
        {
            title: "Nadzór inspektorski",
            image: require("../../assets/realizations/thumbnails/projekty.jpg"),
            url: "nadzor",
        },
        {
            title: "Analizy ekologiczne",
            image: require("../../assets/realizations/thumbnails/analiza.jpg"),
            url: "analizy",
        },
        {
            title: "Szkolenia i audyty",
            image: require("../../assets/realizations/thumbnails/szkolenia.jpg"),
            url: "szkolenia",
        },
    ];
    let match = useRouteMatch();
    return (
        <>
            <div className="Realizations bg section fp-auto-height-responsive">
                <div className="flex">
                    <div className="grid">
                        {subSites.map((tile) => (
                            <Link
                                to={`${match.url}/${tile.url}`}
                                key={tile.url}
                                className="tiles"
                            >
                                <div>
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
        </>
    );
}

export default Realizations;
