import React from "react";
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
import "./style.scss";

function StyledSlider({ slides }) {
    // function importAll(r) {
    //     return r.keys().map(r);
    // }
    // const imagesSlider = importAll(
    //     require.context(
    //         "../../assets/GreenInteriors/slider",
    //         false,
    //         /\.(png|jpe?g|svg)$/,
    //     ),
    // );
    return (
        <div className="StyledSlider">
            <CarouselProvider
                naturalSlideWidth={16}
                naturalSlideHeight={9}
                totalSlides={slides.length}
                step={1}
                dragStep={1}
                infinite
                isPlaying
            >
                <div className="flexBox">
                    <Slider>
                        {slides.map((imgSlide, index) => (
                            <Slide index={index} key={imgSlide.id}>
                                <Image
                                    src={`${process.env.REACT_APP_BACKEND}${imgSlide.image.url}`}
                                    alt=""
                                    className="imageSlide"
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
