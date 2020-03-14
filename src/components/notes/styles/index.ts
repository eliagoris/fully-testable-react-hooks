import styled from "styled-components"

import Text from "../../text/text"

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 100%;
`

const StyledInput = styled.input(({ theme }) => {
  const {
    color: { link },
    settings: {
      large: { size }
    }
  } = theme

  return `
    margin: ${size};
    border-bottom: 1px solid ${link}
  `
})

const StyledTitle = styled(Text)(({ theme }) => {
  const {
    color: { special },
    settings: {
      medium: { size }
    }
  } = theme
  return `
    flex: 1 100%;
    border-bottom: 1px solid ${special};
    text-indent: ${size}
  `
})

const StyledNotesList = styled.div`
  flex: 1 100%;
`

const StyledNotesListItem = styled(Text)(({ theme }) => {
  const {
    color: { special },
    settings: {
      medium: { size }
    }
  } = theme
  return `
    padding: .8rem;
    border-bottom: 1px solid ${special};
    text-indent: ${size}
  `
})

export {
  StyledWrapper,
  StyledInput,
  StyledTitle,
  StyledNotesList,
  StyledNotesListItem
}
