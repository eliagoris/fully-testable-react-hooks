import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle(res => {
  const {
    theme: {
      settings: {
        small: { size }
      },
      color: { base, baseBackground }
    }
  } = res

  return `
  *,
  *:before,
  *:after {
     box-sizing: inherit;
  }
  
  html, body {
    display: flex;
    min-height: 100%;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    flex: 1 100%;
    background: ${baseBackground};
    color: ${base};
    font-size: ${size};
    line-height: ${size};
  }
  
  #root {
    flex: 1 100%;
  }
  `
})
