import React, { Component } from "react";
import axios from "axios";
import PapperCard from "../PapperCard";
import Footer from "../Footer";
import "./style.scss";
import LoadingScrenn from "../LoadingScrenn";

class Ofert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            list: [],
        };
    }
    componentDidMount = () => {
        Promise.all([
            axios.get(`${process.env.REACT_APP_BACKEND}/gm-oferta-lista`),
            axios.get(`${process.env.REACT_APP_BACKEND}/gm-oferta-gw`),
        ]).then(([listResponse, gwResponse]) => {
            this.setState({
                list: listResponse.data.Lista,
                gw: gwResponse.data.logos,
                loaded: true,
            });
        });
    };
    render() {
        const list = this.state.list;
        const gw = this.state.gw;
        if (!this.state.loaded) return <LoadingScrenn />;
        return (
            <div className="Ofert bgNR section fp-auto-height fp-auto-height-responsive ">
                <div className="container">
                    {/* <h1>Oferta</h1>
                    <div className="block">
                        Nasza firma oferuje szeroki zakres usług związanych z
                        zakładaniem terenów zieleni.
                    </div> */}
                    <PapperCard
                        elements={list}
                        title="Nasza oferta skierowana jest do:"
                    />
                    <PapperCard
                        elements={list}
                        title="Oferta obejmuje między innymi:"
                    />
                    <div className="block brandP">
                        Współpracujemy z takimi Generalnymi Wykonawcami jak:
                    </div>
                </div>

                <div className="brands">
                    {gw.map((logo) => (
                        <div className="BrandLogo" key={logo.hash}>
                            <img
                                src={`${process.env.REACT_APP_BACKEND}${logo.url}`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Ofert;
