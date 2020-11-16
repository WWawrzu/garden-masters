import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slide from "./Slide";
import "./style.scss";

class MainSlider extends Component {
    render() {
        const fullpageApi = this.props.fullpageApi;
        const slides = this.props.slides;

        return (
            <div className="container bg MainSlider fp-auto-height section fp-auto-height-responsive">
                <FontAwesomeIcon
                    onClick={() => {
                        fullpageApi.moveSlideLeft();
                    }}
                    icon={faChevronLeft}
                    className="fpControlArrow left"
                />
                <FontAwesomeIcon
                    onClick={() => {
                        fullpageApi.moveSlideRight();
                    }}
                    icon={faChevronRight}
                    className="fpControlArrow right"
                />
                {slides.map((slide) => (
                    <Slide
                        key={slide.image.hash}
                        description={slide.description}
                        title={slide.title}
                        img={`${process.env.REACT_APP_BACKEND}${slide.image.url}`}
                    />
                ))}
            </div>
        );
    }
}

export default MainSlider;
