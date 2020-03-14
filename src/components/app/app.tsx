import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../styles/global-style"
import { theme } from "../../styles/theme"
import { Notes } from "../notes/notes"

const StyledContainer = styled.div(({ theme }) => {
  const {
    breakpoints: { desktop }
  } = theme

  return `
    margin: 0 auto;
    max-width: 42rem;
    padding: 8rem 1.5rem;

    @media (min-width: ${desktop}) {
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
