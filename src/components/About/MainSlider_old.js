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
    ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Arrow = ({ className, style, onClick }) => (
    <div onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </div>
);

function MainSlider({ slides }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: <Arrow />,
    };
    const imagesSlider = [
        require("../../assets/main/slider/1.jpg"),
        require("../../assets/main/slider/2.jpg"),
        require("../../assets/main/slider/3.jpg"),
        require("../../assets/main/slider/4.jpg"),
        require("../../assets/main/slider/5.jpg"),
        require("../../assets/main/slider/6.jpg"),
        require("../../assets/main/slider/7.jpg"),
        require("../../assets/main/slider/8.jpg"),
        require("../../assets/main/slider/9.jpg"),
        require("../../assets/main/slider/10.jpg"),
        require("../../assets/main/slider/11.jpg"),
        require("../../assets/main/slider/12.jpg"),
        require("../../assets/main/slider/13.jpg"),
        require("../../assets/main/slider/14.jpg"),
    ];
    return (
        <div className="container bg MainSlider section">
            <h1>Nasze realizacje</h1>
            <div className="sliderContainer ">
                <div className="sliderBox">
                    <CarouselProvider
                        naturalSlideWidth={4}
                        naturalSlideHeight={3}
                        totalSlides={imagesSlider.length}
                        step={1}
                        dragStep={1}
                        visibleSlides={slides}
                        // hasMasterSpinner={true}
                        infinite={true}
                    >
                        <div className="flexBox">
                            <Slider>
                                {imagesSlider.map((imgSlide, index) => (
                                    <Slide index={index} key={imgSlide}>
                                        <Image
                                            src={imgSlide}
                                            alt=""
                                            className="imageSlide"
                                            imageClassName="imgSlide"
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
            </div>
        </div>
    );
}

export default MainSlider;
