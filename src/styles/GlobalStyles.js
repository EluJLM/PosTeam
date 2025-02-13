import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;
