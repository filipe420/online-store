import styled from "styled-components";

export const Container = styled.footer`
  background-color: #004d4d; /* Verde escuro */
  color: white;
  padding: 20px 40px;
  text-align: center;
  width: 100%;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    p,
    a {
      font-size: 14px;
      color: white;
      text-decoration: none;
      margin-bottom: 8px;
    }

    a:hover {
      text-decoration: underline;
    }

    .contact-info,
    .social-media,
    .additional-info {
      flex: 1;
      min-width: 200px;
      margin: 10px;
    }
  }

  .copyright {
    background-color: #007777; /* Verde mais claro */
    padding: 10px;
    font-size: 14px;
    color: #e6e6e6;

  }
`;
