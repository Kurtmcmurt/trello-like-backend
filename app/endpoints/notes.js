import { v4 as uuidv4 } from 'uuid';

export const AddNotes = (content) => {
  const noteObject = {
    id: uuidv4(),
    content
  }

  notesStore.push(noteObject)
}


