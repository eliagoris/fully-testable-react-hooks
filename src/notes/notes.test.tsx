import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import React from "react"

import { Note, useNotes } from "./hooks/useNotes"
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
    const title: string = "Learning technology is cool"
    fireEvent.submit(form, {
      target: {
        title
      }
    })

    /** Then Expect that the add note handler has been called */
    expect(ADD_NOTE_HANDLER)
  })
})
