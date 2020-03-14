import React from "react"

import { useNotes } from "./hooks/use-notes"

import {
  StyledWrapper,
  StyledInput,
  StyledTitle,
  StyledNotesList,
  StyledNotesListItem,
  StyledListItemRightActions,
  StyledActionItem
} from "./styles"
import { EditIcon, DeleteIcon } from "../icons"

export const Notes: React.FC = () => {
  const {
    notes,
    handleAddNote,
    handleDeleteNote,
    handleUpdateNote
  } = useNotes()

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

  function handleDeleteButtonClick(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    const {
      currentTarget: {
        dataset: { id }
      }
    } = e
    handleDeleteNote(id)
  }

  function handleEditButtonClick(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    const {
      currentTarget: {
        dataset: { id }
      }
    } = e

    const title = "Nice edit ;)"

    handleUpdateNote(id, { title })
  }

  return (
    <StyledWrapper>
      <StyledTitle size="large">Notes</StyledTitle>

      <StyledNotesList>
        {notes.map(({ id, title }) => (
          <StyledNotesListItem key={id}>
            {title}

            <StyledListItemRightActions>
              <StyledActionItem
                data-id={id}
                data-testid="edit-note-button"
                onClick={handleEditButtonClick}
              >
                <EditIcon />
              </StyledActionItem>
              <StyledActionItem
                data-id={id}
                data-testid="delete-note-button"
                onClick={handleDeleteButtonClick}
              >
                <DeleteIcon />
              </StyledActionItem>
            </StyledListItemRightActions>
          </StyledNotesListItem>
        ))}
      </StyledNotesList>

      <form data-testid="notes-form" onSubmit={handleFormSubmit}>
        <StyledInput
          id="title"
          name="title"
          placeholder="write a note here..."
          required
        />
      </form>
    </StyledWrapper>
  )
}
