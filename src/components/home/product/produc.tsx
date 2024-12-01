"use client";

import React from "react";
import * as S from "./styles";

const Product: React.FC = () => {
  return (
    <S.Container>
      {/* Stats Bar */}
      <S.StatsBar>
        <div className="stat">
          <span className="icon">📋</span>
          <div className="stat-content">
            <span className="number">164</span>
            <span className="label">Pedidos</span>
          </div>
        </div>
        <div className="stat">
          <span className="icon">📦</span>
          <div className="stat-content">
            <span className="number">57</span>
            <span className="label">Produtos</span>
          </div>
        </div>
        <div className="stat">
          <span className="icon">🌐</span>
          <div className="stat-content">
            <span className="number">271K</span>
            <span className="label">Visitas</span>
          </div>
        </div>
        <button className="follow-button">Seguir</button>
      </S.StatsBar>

      {/* Filter Bar */}
      <S.FilterBar>
        <button className="filter-button">
          <span className="icon">👁️</span>
          Ver Snaps
        </button>
        <button className="filter-button">
          <span className="icon">🔍</span>
          Filtros
        </button>
        <select className="order-select">
          <option>Ordem Pedido</option>
        </select>
      </S.FilterBar>

      {/* New Arrivals Section */}
      <S.SectionTitle>Acabaram de Chegar</S.SectionTitle>
      <S.ProductGrid>
        {/* Example Product Card */}
        <S.ProductCard>
          <div className="product-image">
            <img src="/assets/home/creatina.png" alt="ULTRAMASS 3KG" />
            <div className="navigation">
              <button className="nav-button prev">‹</button>
              <button className="nav-button next">›</button>
            </div>
          </div>
          <div className="product-info">
            <h3>CREATINA 3KG - MONOHYDRATE</h3>
            <div className="price">R$ 69,90</div>
            <div className="availability">3 vendidos</div>
            <button className="buy-button">
              🛒 Comprar
            </button>
            <div className="actions">
              <button aria-label="Favoritar">❤️</button>
              <button aria-label="Avaliar">⭐</button>
              <button aria-label="Compartilhar">🔗</button>
            </div>
          </div>
        </S.ProductCard>
        {/* Additional product cards would be repeated here */}
      </S.ProductGrid>

      {/* Best Sellers Section */}
      <S.SectionTitle>Mais Vendidos</S.SectionTitle>
      <S.ProductGrid>
        {/* Same product card structure would be repeated here */}
      </S.ProductGrid>
    </S.Container>
  );
};

export default Product;
