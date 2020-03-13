import { useState } from "react"
import { v4 } from "uuid"

export interface Note {
  id?: string
  title: string
}

function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])

  const handleAddNote = function({ title }: Note) {
    setNotes(prevNotes =>
      prevNotes.concat({
        id: v4(),
        title
      })
    )
  }

  const handleUpdateNote = function(id: string | undefined, updates: Note) {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === id ? { ...note, ...updates } : note))
    )
  }

  const handleDeleteNote = function(id: string | undefined) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  return {
    notes,
    handleAddNote,
    handleUpdateNote,
    handleDeleteNote
  }
}

export { useNotes }
