import React, { Component } from "react";
import axios from "axios";
import LazyHero from "react-lazy-hero";
import hero from "../../assets/GreenInteriors/hero.jpg";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import { motion } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import "./style.scss";
import PapperCard from "../PapperCard/index";
import StyledSlider from "../StyledSlider";
import LoadingScrenn from "../LoadingScrenn";

class GreenInteriors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            loaded: false,
            list: [],
        };
    }
    componentDidMount = () => {
        Promise.all([
            axios.get(`${process.env.REACT_APP_BACKEND}/gm-zww-slider`),
            axios.get(`${process.env.REACT_APP_BACKEND}/gm-zww-lista`),
        ]).then(([sliderResponse, listResponse]) => {
            this.setState({
                slides: sliderResponse.data.slied_without_desc,
                list: listResponse.data.Lista,
                loaded: true,
            });
        });
    };

    render() {
        const slides = this.state.slides;
        const list = this.state.list;
        if (!this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <ReactFullpage
                    {...fullPageSettings}
                    render={({ fullpageApi }) => {
                        return (
                            <div className="GreenInteriors">
                                <ReactFullpage.Wrapper>
                                    <header className="section fp-auto-height-responsive ">
                                        <LazyHero
                                            imageSrc={hero}
                                            opacity={0}
                                            parallaxOffset={100}
                                            minHeight="100vh"
                                            color="#142B21"
                                            isCentered={false}
                                        >
                                            <div className="heroFill">
                                                <div className="wwd">
                                                    <h2>
                                                        Projektujemy i
                                                        wykonujemy aranżacje
                                                        roślinne we wnętrzach:
                                                    </h2>
                                                    <div className="block">
                                                        <p>Hoteli</p>
                                                        <p>Biurowców</p>
                                                        <p>
                                                            Galerii handlowych
                                                        </p>
                                                        <p>
                                                            Parków rozrywki (w
                                                            tym parków wodnych)
                                                        </p>
                                                        <p>
                                                            Budynków
                                                            użyteczności
                                                            publicznej
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="scroll">
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        ease: "easeInOut",
                                                        loop: Infinity,
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faChevronDown}
                                                        className="icon"
                                                        onClick={() =>
                                                            fullpageApi.moveSectionDown()
                                                        }
                                                    />
                                                </motion.div>
                                            </div>
                                        </LazyHero>
                                    </header>
                                    <div className="bgNR section fp-auto-height-responsive">
                                        <div className="grid">
                                            <div className="left">
                                                <PapperCard
                                                    elements={list}
                                                    title="Wybrane z naszych realizcaji"
                                                />
                                            </div>
                                            <div className="right">
                                                <StyledSlider slides={slides} />
                                            </div>
                                        </div>
                                    </div>
                                    <Footer />
                                </ReactFullpage.Wrapper>
                            </div>
                        );
                    }}
                />
            );
    }
}

export default GreenInteriors;
