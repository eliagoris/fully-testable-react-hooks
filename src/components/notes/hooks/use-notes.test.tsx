import "@testing-library/jest-dom/extend-expect"
import { renderHook, act } from "@testing-library/react-hooks"

import { useNotes, Note } from "./use-notes"

describe("useNotes", function() {
  describe("notes", function() {
    it("Should default to an empty array", function() {
      const {
        result: {
          current: { notes }
        }
      } = renderHook(() => useNotes())
      expect(notes).toStrictEqual([])
    })
  })

  /**
   * Feature: Create Note
   */
  describe("handleAddNote", function() {
    it("Should add a note to the notes array", function() {
      /** Given There is 0 notes */
      const {
        result: {
          current: { notes, handleAddNote }
        }
      } = renderHook(() => useNotes())

      /** A note is created with the title "Learning technology is cool"  */
      const expectedTitle = "Learning technology is cool"
      act(() => handleAddNote({ title: expectedTitle }))

      /** Then Expect to have 1 note with title "Learning technology is cool" */
      const createdNote = notes.find(
        ({ title }: Note) => title === expectedTitle
      )
      expect(createdNote).toBeTruthy()
    })
  })

  /**
   * Feature: Update Note
   */
  describe("handleUpdateNote", function() {
    it("Should update a note from the notes array", function() {
      const {
        result: {
          current: { notes, handleUpdateNote, handleAddNote }
        }
      } = renderHook(() => useNotes())

      /** Given There is a note with title "I bought fruit today" */
      const fromTitle = "I bought fruit today"
      act(() => handleAddNote({ title: fromTitle }))

      /** When The title of the note "I bought fruit today" is changed to "Buy fruit tomorrow" */
      const toTitle = "Buy fruit tomorrow"
      const noteToChange = notes.find(({ title }: Note) => title === fromTitle)

      act(() => handleUpdateNote(noteToChange?.id, { title: toTitle }))

      /** Then Expect to have a note with title "Buy fruit tomorrow" */
      const expectedNote = notes.find(({ title }: Note) => title === toTitle)
      expect(expectedNote).toBeTruthy()
    })
  })

  /**
   * Feature: Delete Note
   */
  describe("handleDeleteNote", function() {
    it("Should delete a note from the notes array", function() {
      const {
        result: {
          current: { notes, handleAddNote, handleDeleteNote }
        }
      } = renderHook(() => useNotes())

      /** Given There is 2 notes */
      act(() => handleAddNote({ title: "Very nice Note" }))
      act(() => handleAddNote({ title: "Another Note" }))

      /** When One note is deleted */
      const { id } = notes[0]
      act(() => handleDeleteNote({ id }))

      /** Then Expect to have only 1 note */
      expect(notes).toHaveLength(1)
    })
  })
})
