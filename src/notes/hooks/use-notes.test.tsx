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
      expect(notes).toBe([])
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
      act(function() {
        handleAddNote({ expectedTitle })
      })

      /** Then Expect to have 1 note with title "Learning technology is cool" */
      const createdNote: Note = notes.find(
        ({ title }: Note) => title === expectedTitle
      )
      expect(createdNote).toBeTruthy()
    })
  })
})
