import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-color: #4C9A9A;

  header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1; 
  }

  footer {
    flex-shrink: 0;
  }
`;
