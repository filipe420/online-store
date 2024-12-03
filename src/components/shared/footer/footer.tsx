import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.Column>
        <h4>About</h4>
        <a href="#">Our Story</a>
        <a href="#">Careers</a>
      </S.Column>
      <S.Column>
        <h4>Support</h4>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
      </S.Column>
    </S.FooterContainer>
  );
};

export default Footer;
