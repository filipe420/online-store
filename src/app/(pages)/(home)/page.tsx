"use client";
import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import Product from "@/components/home/product/produc";
import Footer from "@/components/shared/footer/footer";
import ImageCarousel from "@/components/home/imageCarousel/imageCarousel";


const Home: React.FC = () => {

  return (
    <S.Container>
     <Header/>
     <ImageCarousel />
     <Product/>
     <Footer/>
    </S.Container>
  );
};
export default Home;
