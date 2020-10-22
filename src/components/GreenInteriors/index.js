import React from "react";
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
import data from "./data";
import StyledSlider from "./StyledSlider";

const GreenInteriors = React.forwardRef((props, ref) => (
    <ReactFullpage
        {...fullPageSettings}
        render={({ state, fullpageApi }) => {
            return (
                <div className="GreenInteriors">
                    <ReactFullpage.Wrapper>
                        <header
                            ref={ref}
                            className="section fp-auto-height-responsive "
                        >
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
                                            Projektujemy i wykonujemy aranżacje
                                            roślinne we wnętrzach:
                                        </h2>
                                        <div className="block">
                                            <p>Hoteli</p>
                                            <p>Biurowców</p>
                                            <p>Galerii handlowych</p>
                                            <p>
                                                Parków rozrywki (w tym parków
                                                wodnych)
                                            </p>
                                            <p>
                                                Budynków użyteczności publicznej
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
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
                                        elements={data}
                                        title="Wybrane z naszych realizcaji"
                                    />
                                </div>
                                <div className="right">
                                    <StyledSlider />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </ReactFullpage.Wrapper>
                </div>
            );
        }}
    />
));

export default GreenInteriors;
