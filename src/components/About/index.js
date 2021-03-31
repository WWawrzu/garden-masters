import React, { Component } from "react";
import axios from "axios";
import "./style.scss";
import MainAbout from "./MainAbout";
import MainHeader from "./MainHeader";
import MainSlider from "../MainSlider";
import MainSocial from "./MainSocial";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import Footer from "../Footer";
import LoadingScrenn from "../LoadingScrenn";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            loaded: false,
            mainText: [],
            instagramPosts: [],
        };
    }

    componentDidMount = () => {
        Promise.all([
            // axios.get(`${process.env.REACT_APP_BACKEND}/main-slider`),
            // axios.get(`${process.env.REACT_APP_BACKEND}/o-firmie-tekst`),
            // axios.get(`${process.env.REACT_APP_BACKEND}/o-firmie-instagram`),
        ]).then(([sliderResponse, textResponse, instagramResponse]) => {
            this.setState({
                loaded: true,
            });
        });
    };

    render() {
        const instagramPosts = this.state.instagramPosts;
        const slides = this.state.slides;
        const mainText = this.state.mainText;
        console.log();
        if (!this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <div className="About">
                    <div className="section">
                        <div className="slider"></div>
                        <div className="text">
                            <h1>INSPEKTOR NADZORU TERENOW ZIELENI</h1>
                            <div className="desc">
                                Jesteśmy grupą ekspertów w dziedzinie zieleni.
                                Tworzymy zespół składający się z
                                wykwalifikowanych ogrodników oraz architektów
                                krajobrazu z ponad 30 letnim doświadczeniem w
                                zakresie projektowania, budowy i pielęgnacji
                                terenów zieleni. Członkowie naszej kadry są
                                absolwentami Uniwersytetu Rolniczego w Krakowie
                                i Politechniki Krakowskiej.
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="slider"></div>
                        <div className="text">
                            <div className="desc">
                                Jesteśmy grupą ekspertów w dziedzinie zieleni.
                                Tworzymy zespół składający się z
                                wykwalifikowanych ogrodników oraz architektów
                                krajobrazu z ponad 30 letnim doświadczeniem w
                                zakresie projektowania, budowy i pielęgnacji
                                terenów zieleni. Członkowie naszej kadry są
                                absolwentami Uniwersytetu Rolniczego w Krakowie
                                i Politechniki Krakowskiej.
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
    }
}

export default About;
