import React from "react"
import styled from "styled-components"

import { GlobalStyle } from "../../styles/global-style"
import { Notes } from "../notes/notes"

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 480px;
`

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Notes />
      </StyledContainer>
    </>
  )
}
