"use client";

import React from "react";
import * as S from "./styles";

const Product: React.FC = () => {
  // Lista de produtos
  const products = [
    {
      id: 1,
      name: "CREATINA 3KG - MONOHYDRATE",
      price: "R$ 69,90",
      sold: "3 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 2,
      name: "WHEY PROTEIN 2KG - CHOCOLATE",
      price: "R$ 129,90",
      sold: "5 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 3,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 4,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 5,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 6,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 7,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 8,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 9,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 10,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    {
      id: 11,
      name: "MASS GAINER 5KG - BAUNILHA",
      price: "R$ 99,90",
      sold: "8 vendidos",
      image: "/assets/home/creatina.png",
    },
    // Adicione mais produtos aqui...
    {
      id: 12,
      name: "MULTIVITAMÍNICO COMPLETO",
      price: "R$ 49,90",
      sold: "15 vendidos",
      image: "/assets/home/creatina.png",
    },
  ];

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
        {/* Renderização dinâmica dos cards */}
        {products.map((product) => (
          <S.ProductCard key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="navigation">
                <button className="nav-button prev">‹</button>
                <button className="nav-button next">›</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
              <div className="availability">{product.sold}</div>
              <button className="buy-button">🛒 Comprar</button>
              <div className="actions">
                <button aria-label="Favoritar">❤️</button>
                <button aria-label="Avaliar">⭐</button>
                <button aria-label="Compartilhar">🔗</button>
              </div>
            </div>
          </S.ProductCard>
        ))}
      </S.ProductGrid>

      {/* Best Sellers Section */}
      <S.SectionTitle>Mais Vendidos</S.SectionTitle>
      <S.ProductGrid>
        {/* Aqui você pode reutilizar a mesma lógica para outra lista de produtos */}
      </S.ProductGrid>
    </S.Container>
  );
};

export default Product;
