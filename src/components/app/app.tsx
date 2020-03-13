import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle, theme } from "../../styles"
import { Notes } from "../notes/notes"

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 480px;
`

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <StyledContainer>
          <Notes />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
