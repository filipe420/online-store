"use client";
import React from "react";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      {/* Top bar */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
        <div className="store-info">
          <a href="#">Informações da Loja</a>
          <a href="#">Formas de Pagamento</a>
          <a href="#">Formas de Entrega</a>
          <a href="#">Termos e Políticas</a>
        </div>
        <div className="cart-info">
          <span>R$0,00</span>
        </div>
      </div>

      {/* Logo and Search */}
      <div className="header-middle">
        <div className="logo">
          <img src="/assets/home/logo-suplementos.png" alt="Center Suplementos" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar Produtos" />
          <button>🔍</button>
        </div>
        <div className="account-info">
          <a href="#">Atendimento</a>
          <a href="#">Minha Conta</a>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <a href="#">INÍCIO</a>
        <a href="#">CREATINA</a>
        <a href="#">PROTEÍNA</a>
        <a href="#">PRE WORKOUT</a>
        <a href="#">FITOTERÁPICOS E VIT</a>
        <a href="#">HIPERCALÓRICOS</a>
        <a href="#">MAIS CATEGORIAS</a>
      </div>
    </S.Container>
  );
};

export default Header;
