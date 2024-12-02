import styled from 'styled-components';

export const Container = styled.div`
 width: 95%;
 padding-top: 2rem;
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;

  .stat {
    display: flex;
    align-items: center;
    gap: 10px;

    .stat-content {
      display: flex;
      flex-direction: column;

      .number {
        font-weight: bold;
        color: #ff4444;
      }

      .label {
        font-size: 0.8rem;
        color: #666;
      }
    }
  }

  .follow-button {
    background: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #ff2222;
    }
  }
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  .filter-button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;

    &:hover {
      background: #f5f5f5;
    }
  }

  .order-select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    flex-grow: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .product-image {
    position: relative;
    aspect-ratio: 1;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-left: 15px;
    }

    .navigation {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      padding: 0 10px;

      .nav-button {
        background: rgba(255,255,255,0.8);
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
        color: #666;

        &:hover {
          background: white;
        }
      }
    }
  }

  .product-info {
    padding: 15px;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 10px;
      color: #333;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }

    .availability {
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 10px;
    }

    .buy-button {
      width: 100%;
      padding: 8px;
      background: #ff4444;
      color: white;
      border: none;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: pointer;
      margin-bottom: 10px;

      &:hover {
        background: #ff2222;
      }
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 15px;

      button {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;

        &:hover {
          color: #ff4444;
        }
      }
    }
  }
`;

