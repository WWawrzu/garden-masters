import React, { Component } from "react";
import Footer from "../Footer";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../StyledButton/index";
import axios from "axios";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            contact: [],
        };
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_BACKEND}/gm-kontakt`).then((res) => {
            this.setState({ contact: res.data, loaded: true });
        });
    };
    render() {
        const contact = this.state.contact;
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
                                                    spółka z o.o. spółka
                                                    komandytowa
                                                </div>
                                            </div>
                                            <h3>
                                                Dane rejestrowe / Adres siedziby
                                            </h3>
                                            <div className="conBlock">
                                                <p>{contact.adres1}</p>
                                                <p>{contact.adres2}</p>
                                            </div>
                                            <div className="conBlock">
                                                <p>
                                                    KRS <b>{contact.krs}</b>
                                                </p>
                                                <p>
                                                    NIP <b>{contact.nip}</b>
                                                </p>
                                                <p>
                                                    REGON <b>{contact.regon}</b>
                                                </p>
                                            </div>
                                            <div className="conBlock">
                                                <p>nr rachunku bankowego:</p>
                                                <p>
                                                    <b>
                                                        {
                                                            contact.nr_rachunku_bankowego
                                                        }
                                                    </b>
                                                </p>
                                            </div>
                                            <h3>Adres biura</h3>
                                            <div className="conBlock">
                                                <p>{contact.adres_biura1}</p>
                                                <p>{contact.adres_biura2}</p>
                                            </div>
                                            <div className="conBlock">
                                                <p>{contact.adres_biura_tel}</p>
                                                <p>
                                                    email:{" "}
                                                    <b>
                                                        {
                                                            contact.adres_biura_email
                                                        }
                                                    </b>
                                                </p>
                                            </div>
                                            <StyledButton
                                                text="Rodo"
                                                icon={faExternalLinkAlt}
                                            />
                                        </div>
                                        <div className="right">
                                            <div className="mapContainer"></div>
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
}

export default Contact;
