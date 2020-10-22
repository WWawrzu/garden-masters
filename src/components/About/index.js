import React, { Component } from "react";
import axios from "axios";
import "./style.scss";
import MainAbout from "./MainAbout";
import MainHeader from "./MainHeader";
import MainSlider from "./MainSlider";
import MainSocial from "./MainSocial";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../Footer";
import fullPageSettings from "../fullPageSettings";
import LoadingScrenn from "../LoadingScrenn";
import data from "./data";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: data.slides,
            loaded: false,
            mainText: data.mainText,
            instagramPosts: data.instagramPosts,
        };
    }

    // componentDidMount = () => {
    //     Promise.all([
    //         axios.get(`${process.env.REACT_APP_BACKEND}/main-slider`),
    //         axios.get(`${process.env.REACT_APP_BACKEND}/o-firmie-tekst`),
    //         axios.get(`${process.env.REACT_APP_BACKEND}/o-firmie-instagram`),
    //     ]).then(([sliderResponse, textResponse, instagramResponse]) => {
    //         this.setState({
    //             slides: sliderResponse.data.Slide,
    //             mainText: textResponse.data,
    //             instagramPosts: instagramResponse.data.instaposts,
    //             loaded: false,
    //         });
    //     });
    // };
    render() {
        const instagramPosts = this.state.instagramPosts;
        const slides = this.state.slides;
        const mainText = this.state.mainText;
        console.log();
        if (this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <ReactFullpage
                    {...fullPageSettings}
                    render={({ state, fullpageApi }) => {
                        return (
                            <div className="About">
                                <ReactFullpage.Wrapper>
                                    <MainHeader fullpageApi={fullpageApi} />
                                    <MainAbout
                                        className="section"
                                        text={mainText}
                                    />
                                    <MainSlider
                                        className="section"
                                        slides={slides}
                                        fullpageApi={fullpageApi}
                                    />
                                    <MainSocial
                                        className="section"
                                        instagramPosts={instagramPosts}
                                    />
                                    <Footer />
                                </ReactFullpage.Wrapper>
                            </div>
                        );
                    }}
                />
            );
    }
}

export default About;
