import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 75px;
  background-color: #ececec;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 20px;
    color: #222;
  }

  a {
    color: #6d6d6d;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      color: #088178;
    }
  }
`;
