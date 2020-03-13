import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import React from "react"

import { Note, useNotes } from "./hooks/use-notes"
import Notes from "./notes"

describe("Notes", function() {
  const mockedNotes: Note[] = [
    {
      title: "The world is a world"
    },
    {
      title: "This is a nice note"
    }
  ]

  it("Allows the user to add a note", function() {
    const HOOK_SPY: jest.SpyInstance<any, unknown[]> = jest.spyOn(
      { useNotes },
      "useNotes"
    )
    const ADD_NOTE_HANDLER: jest.Mock<any, any> = jest.fn()

    /** Given There is 2 notes */
    HOOK_SPY.mockReturnValue({
      notes: mockedNotes,
      handleAddNote: ADD_NOTE_HANDLER
    })

    /** And The notes form is rendered */
    const { getByTestId } = render(<Notes />)
    const form: HTMLElement = getByTestId("notes-form")

    /** When The form is submitted */
    fireEvent.submit(form)

    /** Then Expect that the add note handler has been called */
    expect(ADD_NOTE_HANDLER)
  })

  it("Allows the user to read notes", function() {
    const HOOK_SPY: jest.SpyInstance<any, unknown[]> = jest.spyOn(
      { useNotes },
      "useNotes"
    )

    /** Given There is 2 notes */
    HOOK_SPY.mockReturnValue({
      notes: mockedNotes
    })

    /** When The notes view is rendered */
    const { getByText } = render(<Notes />)

    /** Then Expect to see the notes */
    mockedNotes.forEach(function({ title }) {
      getByText(title)
    })
  })

  it("Allows the user to update notes", function() {
    const HOOK_SPY: jest.SpyInstance<any, unknown[]> = jest.spyOn(
      { useNotes },
      "useNotes"
    )
    const UPDATE_NOTE_HANDLER: jest.Mock<any, any> = jest.fn()

    /** Given There is 2 notes */
    HOOK_SPY.mockReturnValue({
      notes: mockedNotes,
      handleUpdateNote: UPDATE_NOTE_HANDLER
    })

    /** And The notes view is rendered */
    const { getAllByTestId } = render(<Notes />)

    /** When An edit button is clicked */
    const button = getAllByTestId("edit-note-button")[0]
    fireEvent.click(button)

    /** Then Expect the update note handler to be called */
    expect(UPDATE_NOTE_HANDLER).toBeCalled()
  })

  it("Allows the user to delete notes", function() {
    const HOOK_SPY: jest.SpyInstance<any, unknown[]> = jest.spyOn(
      { useNotes },
      "useNotes"
    )
    const DELETE_NOTE_HANDLER: jest.Mock<any, any> = jest.fn()

    /** Given There is 2 notes */
    HOOK_SPY.mockReturnValue({
      notes: mockedNotes,
      handleDeleteNote: DELETE_NOTE_HANDLER
    })

    /** And The notes view is rendered */
    const { getAllByTestId } = render(<Notes />)

    /** When A delete button is clicked */
    const button = getAllByTestId("edit-note-button")[0]
    fireEvent.click(button)

    /** Then Expect the delete note handler to be called */
    expect(DELETE_NOTE_HANDLER).toBeCalled()
  })
})
