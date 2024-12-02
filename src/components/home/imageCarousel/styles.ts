import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 0;
  
  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-dots {
    bottom: 20px;
    z-index: 10;

    li button:before {
      color: #fff;
      font-size: 12px;
      opacity: 0.7;
    }

    li.slick-active button:before {
      color: #fff;
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 40px;
      color: #fff;
      opacity: 0.7;
    }

    &:hover:before {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 25px;
  }

  .slick-next {
    right: 25px;
  }
`;

export const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
