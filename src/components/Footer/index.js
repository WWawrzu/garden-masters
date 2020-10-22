import React from "react";
import shortid from "shortid";
import Social from "../Social";
import "./style.scss";

function Footer(props) {
    const data = [
        {
            id: shortid.generate(),
            text:
                "GARDEN MASTER Sp. z o. o. sp.k.<br/>ul. W. Barbackiego 40<br/>33-300 Nowy Sącz",
        },
        {
            id: shortid.generate(),
            text: "Biuro Kraków<br/>ul. Zaułek 4/F<br/>30-703 Kraków",
        },
        {
            id: shortid.generate(),
            text:
                "NIP: 734- 355-23-23<br/>REGON: 368303758<br/>KRS: 0000695572",
        },
        {
            id: shortid.generate(),
            text:
                "www.gardenmaster.eu<br/>biuro@gardenmaster.eu<br/>tel. 783 610 620",
        },
    ];

    return (
        <div className="Footer section fp-auto-height fp-auto-height-responsive">
            <div className="wrapper">
                <div className="flexContainer">
                    {data.map(({ id, text }) => (
                        <div
                            className="block"
                            key={id}
                            dangerouslySetInnerHTML={{ __html: text }}
                        ></div>
                    ))}
                </div>
                <Social />
            </div>
            <div className="lines"></div>
        </div>
    );
}

export default Footer;
