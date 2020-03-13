import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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
  }

	body {
		margin: 0;
		padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    flex: 1 100%;
  }

  #root {
    flex: 1 100%;
  }
`
