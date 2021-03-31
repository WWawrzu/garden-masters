import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import PapperCard from "../PapperCard/index";
import LoadingScrenn from "../LoadingScrenn";
import "./style.scss";
import StyledSlider from "../StyledSlider";
import MainSlider from "../MainSlider";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
class Workmenship extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, lists: [] };
    }
    componentDidMount = () => {
        Promise.all([
            axios.get(
                `${process.env.REACT_APP_BACKEND}/gm-realizacje-wykonawstwo`,
            ),
            axios.get(
                `${process.env.REACT_APP_BACKEND}/gm-realizacje-wkonawstwo-slider`,
            ),
        ]).then(([listResponse, sliderResponse]) => {
            this.setState({
                slides: sliderResponse.data.slides,
                lists: listResponse.data.lists,
                loaded: true,
            });
        });
    };
    render() {
        const lists = this.state.lists;
        const slides = this.state.slides;
        if (!this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <div className="section fp-auto-height-responsive">
                    <div className="bgNR sub realizacjeSub">
                        <div className="conSub conBig">
                            {/* <h1 className="">wykonawstwo</h1> */}
                            {/* <StyledSlider slides={slides} /> */}
                            {/* <ReactFullpage
                                {...fullPageSettings}
                                responsiveHeight={4000}
                                responsiveWidth={4000}
                                render={({ state, fullpageApi }) => {
                                    return (
                                        <ReactFullpage.Wrapper>
                                            <MainSlider
                                                // className="section"
                                                slides={slides}
                                                fullpageApi={fullpageApi}
                                            />
                                        </ReactFullpage.Wrapper>
                                    );
                                }}
                            /> */}

                            {/* <p>Wybrane z ostatnich lat</p> */}
                            <div className="twoColumns">
                                {lists.map(({ title, list }) => (
                                    <PapperCard title={title} elements={list} />
                                ))}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            );
    }
}

export default Workmenship;
