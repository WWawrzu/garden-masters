import React from "react";
import Footer from "../Footer";
import "./style.scss";
import { workmenshipData } from "./data";
import PapperCard from "../PapperCard/index";

function Workmenship(props) {
    return (
        <div>
            <div className="bgNR sub realizacjeSub">
                <div className="conSub conBig">
                    <h1 className="">Wykonastwo</h1>
                    <p>Wybrane z ostatnich lat</p>
                    <div className="twoColumns">
                        {workmenshipData.map((card) => (
                            <PapperCard
                                title={card.title}
                                elements={card.data}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Workmenship;
