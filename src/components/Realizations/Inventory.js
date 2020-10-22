import React from "react";
import { inventoryData } from "./data";
import PapperCard from "../PapperCard/index";
import Footer from "../Footer";
import "./style.scss";
function Inventory(props) {
    return (
        <div className="bgNR sub realizacjeSub">
            <div className="conSub conCenter">
                <h1 className="withoutSub">Inwentaryzacje</h1>
                {inventoryData.map((card) => (
                    <PapperCard elements={card.data} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Inventory;
