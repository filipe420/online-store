"use client";
import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import Product from "@/components/home/product/produc";





const Home: React.FC = () => {

  return (
    <S.Container>
     <Header/>
     <Product/>
    </S.Container>
  );
};
export default Home;
