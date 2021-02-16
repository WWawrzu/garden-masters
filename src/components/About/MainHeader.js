import React from "react";
import LazyHero from "react-lazy-hero";
import logo from "../../assets/main/hero_gardenv3.png";
import { motion } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = React.forwardRef(({ fullpageApi }, ref) => (
    <header
        ref={ref}
        className="section fp-auto-height fp-auto-height-responsive"
    >
        <LazyHero
            imageSrc={logo}
            opacity={0.5}
            parallaxOffset={100}
            minHeight="100vh"
            color="#142B21"
        >
            <img
                src={require("../../assets/logo.jpg")}
                alt="logo Garden Master"
            />
            <div
                className="scroll"
                onClick={() => fullpageApi.moveSectionDown()}
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        loop: Infinity,
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </motion.div>
            </div>
        </LazyHero>
    </header>
));

export default MainHeader;
