import React from "react"

import { useNotes } from "./hooks/use-notes"

import {
  StyledWrapper,
  StyledInput,
  StyledTitle,
  StyledNotesList,
  StyledNotesListItem
} from "./styles"

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

      <StyledNotesList>
        {notes.map(({ id, title }) => (
          <StyledNotesListItem key={id}>{title}</StyledNotesListItem>
        ))}
      </StyledNotesList>

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
