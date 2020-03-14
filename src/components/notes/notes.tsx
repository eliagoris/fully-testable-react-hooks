import React from "react"
import styled from "styled-components"

import { useNotes } from "./hooks/use-notes"
import Text from "../text/text"

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
    border-bottom: 1px solid ${special}
  `
})

export const Notes: React.FC = () => {
  const { notes, handleAddNote } = useNotes()

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const {
      currentTarget: { elements }
    } = e

    const titleElement = elements.namedItem("title")
    const value = (titleElement as HTMLInputElement).value

    handleAddNote({ title: value })
    e.currentTarget.reset()
  }

  return (
    <StyledWrapper>
      <StyledTitle size="large">Notes</StyledTitle>

      {notes.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}

      <form data-testid="notes-form" onSubmit={handleFormSubmit}>
        <StyledInput
          id="title"
          name="title"
          placeholder="write a note here..."
        />
      </form>
    </StyledWrapper>
  )
}
