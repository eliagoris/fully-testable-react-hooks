import styled from "styled-components"

import Text from "../../text/text"

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 100%;
`

const StyledInput = styled.input(({ theme }) => {
  const {
    color: { link }
  } = theme

  return `
    border-bottom: 1px solid ${link}
  `
})

const StyledTitle = styled(Text)(({ theme }) => {
  const {
    color: { special }
  } = theme
  return `
  flex: 1 100%;
    border-bottom: 1px solid ${special}
  `
})

const StyledNotesList = styled.div`
  flex: 1 100%;
`

export { StyledWrapper, StyledInput, StyledTitle, StyledNotesList }
