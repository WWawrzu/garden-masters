import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slide from "./Slide";

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
                        key={slide.title}
                        description={slide.description}
                        title={slide.title}
                        img={`http://localhost:1337${slide.image.url}`}
                    />
                ))}
            </div>
        );
    }
}

export default MainSlider;
