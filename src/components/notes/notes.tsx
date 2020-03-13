import React from "react"

import { useNotes } from "./hooks/use-notes"

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
    <>
      <h1>Notes</h1>

      {notes.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}

      <form data-testid="notes-form" onSubmit={handleFormSubmit}>
        <input id="title" name="title" />
        <button type="submit">add</button>
      </form>
    </>
  )
}
