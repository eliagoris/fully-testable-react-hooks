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
      const { result } = renderHook(() => useNotes())

      /** A note is created with the title "Learning technology is cool"  */
      const expectedTitle = "Learning technology is cool"
      act(() => result.current.handleAddNote({ title: expectedTitle }))

      /** Then Expect to have 1 note with title "Learning technology is cool" */
      const createdNote = result.current.notes.find(
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
      const { result } = renderHook(() => useNotes())

      /** Given There is a note with title "I bought fruit today" */
      const fromTitle = "I bought fruit today"
      act(() => result.current.handleAddNote({ title: fromTitle }))

      /** When The title of the note "I bought fruit today" is changed to "Buy fruit tomorrow" */
      const toTitle = "Buy fruit tomorrow"
      const noteToChange = result.current.notes.find(
        ({ title }: Note) => title === fromTitle
      )

      act(() =>
        result.current.handleUpdateNote(noteToChange?.id, { title: toTitle })
      )

      /** Then Expect to have a note with title "Buy fruit tomorrow" */
      const expectedNote = result.current.notes.find(
        ({ title }: Note) => title === toTitle
      )
      expect(expectedNote).toBeTruthy()
    })

    /**
     * Another block for testing the handleUpdateNote function branching
     */
    it("Should not update notes if there is no note with the given id", function() {
      const { result } = renderHook(() => useNotes())

      /** Given There is a note with title "I bought fruit today" */
      const fromTitle = "I bought fruit today"
      act(() => result.current.handleAddNote({ title: fromTitle }))

      /** When Try to update a note that doesn't exist */
      const toTitle = "Buy fruit tomorrow"
      const noteToChange = result.current.notes.find(
        ({ title }: Note) => title === "This title doesn't exist"
      )

      act(() =>
        result.current.handleUpdateNote(noteToChange?.id, { title: toTitle })
      )

      /** Then Expect to see the same note */
      const expectedNote = result.current.notes.find(
        ({ title }: Note) => title === fromTitle
      )
      expect(expectedNote).toBeTruthy()
    })
  })

  /**
   * Feature: Delete Note
   */
  describe("handleDeleteNote", function() {
    it("Should delete a note from the notes array", function() {
      const { result } = renderHook(() => useNotes())

      /** Given There is 2 notes */
      act(() => result.current.handleAddNote({ title: "Very nice Note" }))
      act(() => result.current.handleAddNote({ title: "Another Note" }))

      /** When One note is deleted */
      const { id } = result.current.notes[0]
      act(() => result.current.handleDeleteNote({ id }))

      /** Then Expect to have only 1 note */
      expect(result.current.notes).toHaveLength(1)
    })
  })
})
