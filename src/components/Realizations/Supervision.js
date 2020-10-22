import React from "react";
import PapperCard from "../PapperCard/index";
import Footer from "../Footer";
import "./style.scss";
import { supervisionData } from "./data";
function Supervision(props) {
    return (
        <div>
            <div className="bgNR sub realizacjeSub">
                <div className="conSub conCenter">
                    <h1 className="">Projekty</h1>
                    {supervisionData.map((card) => (
                        <PapperCard title={card.title} elements={card.data} />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Supervision;
