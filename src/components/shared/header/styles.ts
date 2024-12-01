
import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff; 

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #006666;
    color: white;
    padding: 10px 20px;

    .social-icons a {
      margin-right: 10px;
      color: white;
      text-decoration: none;
    }

    .store-info a {
      margin-left: 15px;
      color: white;
      text-decoration: none;
    }

    .cart-info {
      font-size: 16px;
    }
  }

  .header-middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4C9A9A;
    padding: 20px;

    .logo img {
      width: 100px;
    }

    .search-bar {
      display: flex;
      align-items: center;

      input {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        margin-left: 8px;
        background-color: #004d4d;
        color: white;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
      }
    }

    .account-info a {
      margin-left: 20px;
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
  }

  .navigation {
    display: flex;
    justify-content: center;
    background-color:#008080 ;
    padding: 10px;

    a {
      margin: 0 15px;
      color: white;
      text-decoration: none;
      font-size: 16px;
    }
  }
`;
