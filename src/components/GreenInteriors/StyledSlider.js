import React from "react";

// import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function StyledSlider({ slides }) {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imagesSlider = importAll(
        require.context(
            "../../assets/GreenInteriors/slider",
            false,
            /\.(png|jpe?g|svg)$/,
        ),
    );
    return (
        <div className="sliderGreen">
            <CarouselProvider
                naturalSlideWidth={4}
                naturalSlideHeight={3}
                totalSlides={imagesSlider.length}
                step={1}
                dragStep={1}
                visibleSlides={slides}
                infinite
                isPlaying
            >
                <div className="flexBox">
                    <Slider>
                        {imagesSlider.map((imgSlide, index) => (
                            <Slide index={index} key={imgSlide}>
                                <Image
                                    src={imgSlide}
                                    alt=""
                                    className="imageSlide"
                                    // imageClassName="imgSlide"
                                    onClick={(e) => console.log(e)}
                                />
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack className="buttonBack">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </ButtonBack>
                    <ButtonNext className="buttonNext">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
}

export default StyledSlider;
