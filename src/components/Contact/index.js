import React from "react";
import Footer from "../Footer";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import GoogleMapReact from "google-map-react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../StyledButton/Ofert/index";

function Contact(props) {
    const cords = { lat: 50.0448998, lng: 19.9633123 };

    return (
        <ReactFullpage
            {...fullPageSettings}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="Contact bg section fp-auto-height-responsive ">
                            <div className="container">
                                <div className="grid">
                                    <div className="left">
                                        <h1>Kontakt</h1>
                                        <div className="marg">
                                            <h2>Garden Masters</h2>
                                            <div className="conBlock">
                                                spółka z o.o. spółka komandytowa
                                            </div>
                                        </div>
                                        <h3>
                                            Dane rejestrowe / Adres siedziby
                                        </h3>
                                        <div className="conBlock">
                                            <p>33-300 Nowy Sącz</p>
                                            <p>ul. Władysłwa Barbackiego 40</p>
                                        </div>
                                        <div className="conBlock">
                                            <p>
                                                KRS <b>0000695572 </b>
                                            </p>
                                            <p>
                                                NIP <b>7343552323 </b>
                                            </p>
                                            <p>
                                                REGON <b>368303758 </b>
                                            </p>
                                        </div>
                                        <div className="conBlock">
                                            <p>nr rachunku bankowego:</p>
                                            <p>
                                                <b>
                                                    64 1240 4748 1111 0010 7550
                                                    4299
                                                </b>
                                            </p>
                                        </div>
                                        <h3>Adres biura</h3>
                                        <div className="conBlock">
                                            <p>30-703 Kraków</p>
                                            <p>ul. Zaułek 4 lok. F</p>
                                        </div>
                                        <div className="conBlock">
                                            <p>Tel: +48 783 630 640</p>
                                            <p>
                                                email:{" "}
                                                <b>biuro@gardenmaster.eu</b>
                                            </p>
                                        </div>
                                        <StyledButton
                                            text="Rodo"
                                            icon={faExternalLinkAlt}
                                        />
                                    </div>
                                    <div className="right">
                                        <div className="mapContainer">
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={cords}
                                                defaultZoom={18}
                                            ></GoogleMapReact>
                                        </div>
                                    </div>
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

export default Contact;
