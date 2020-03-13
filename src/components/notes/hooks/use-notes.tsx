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

  return {
    notes,
    handleAddNote
  }
}

export { useNotes }
