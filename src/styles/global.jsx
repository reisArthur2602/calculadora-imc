import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: inherit;
  box-sizing: border-box;
}

body{
  height: 100%;
  width: 100%;
  background-color: #02060C;
  color: #C3C3C3;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1{
  font-size: 2rem;
  @media screen and (max-width: 26.875rem) {
    font-size: 2.75rem;
  }
}

input{
  outline: none;
  background: transparent;
  cursor: pointer;
}

button{
  cursor: pointer;
}

`;
