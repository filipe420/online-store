"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import * as S from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const carouselImages = [
    {
      src: "/assets/home/supplement1.jpg",
      alt: "Whey Protein Growth - Chocolate e Morango"
    },
    {
      src: "/assets/home/supplement2.jpg",
      alt: "Pré-treino Growth"
    },
    {
      src: "/assets/home/supplement3.jpg",
      alt: "Creatina Growth"
    },
  ];

  return (
    <S.CarouselWrapper>
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <S.SlideItem key={index}>
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </S.SlideItem>
        ))}
      </Slider>
    </S.CarouselWrapper>
  );
};

export default ImageCarousel;

