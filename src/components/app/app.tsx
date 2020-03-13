import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle, theme } from "../../styles"
import { Notes } from "../notes/notes"

const StyledContainer = styled.div(({ theme }) => {
  const {
    settings: { desktop_breakpoint }
  } = theme

  return `
    margin: 0 auto;
    max-width: 42rem;
    padding: 8rem 1.5rem;

    @media (min-width: ${desktop_breakpoint}) {
      padding: 8rem 3rem;
    }
  `
})

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
