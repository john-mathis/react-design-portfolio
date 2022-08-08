import React, { useState } from "react";
import "./Carousel.css";

import leftArrow from "..//..//assets/icon-arrow-left.svg";
import rightArrow from "..//..//assets/icon-arrow-right.svg";
import { CarouselData } from "../Carousel Data/CarouselData";

const Carousel = ({ slides }) => {
  console.log(slides);
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  return (
    <section className="carousel-container">
      <h4 className="carousel-header">My Work</h4>

      <picture className="carousel-img-container">
        {CarouselData.map((img, index) => {
          return (
            <div
              className={currentImage === index ? "active" : "carousel-img"}
              key={index}
            >
              {index === currentImage && (
                <img className="carousel-img" src={img.image} alt="" />
              )}
            </div>
          );
        })}
      </picture>

      <img
        className="carousel-arrow"
        src={leftArrow}
        onClick={prevSlide}
        alt=""
      />
      <img
        className="carousel-arrow"
        src={rightArrow}
        onClick={nextSlide}
        alt=""
      />
    </section>
  );
};

export default Carousel;
