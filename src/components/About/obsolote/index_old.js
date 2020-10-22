import React, { useEffect, useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import OnePageScrollWrapper from "../OnePageScrollWrapper/";
import MainAbout from "./MainAbout";
import MainHeader from "./MainHeader";
import MainSlider from "./MainSlider";
import { debounce } from "lodash";
import MainSocial from "./MainSocial";
import ReactFullpage from "@fullpage/react-fullpage";

function About(props) {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const HandleResize = debounce(() => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }, 100);

    useEffect(() => {
        document
            .querySelector(":root")
            .style.setProperty("--vh", window.innerHeight / 100 + "px");
        window.addEventListener("resize", HandleResize);
        return () => window.removeEventListener("resize", HandleResize);
    }, []);

    const Content = () => (
        <div className="About">
            <MainHeader />
            <div className="content">
                <MainAbout />
                <MainSlider />
                <MainSocial />
            </div>
        </div>
    );

    return window.innerHeight >= 900 && window.innerWidth >= 1300 ? (
        <OnePageScrollWrapper pageLim={5} className="About">
            <Content />
        </OnePageScrollWrapper>
    ) : (
        <div>
            <Content />
        </div>
    );
}

export default About;
