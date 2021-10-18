import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import { baseUrl } from '../config.js'
import { v4 as uuidv4 } from 'uuid'
import lodash from 'lodash'

const file = join(baseUrl, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)
const requiredObjects = ['notes', 'boards', 'projects', 'users']

export const addNotes = async ( data ) => {
  try {
    await db.read()

    const dbCheck = requiredObjects.every(key => Object.keys(db.data).includes(key))
    // If file.json doesn't exist, db.data will be null
    db.data && dbCheck ? db.data : db.data.notes = []
    // You can also use this syntax if you prefer
    const { notes} = db.data
    notes.push({
      id: uuidv4(),
      ...data
    })
    
    // Write db.data content to db.json
    await db.write()
  } catch (error) {
    console.log(error);
  }
}

export const getNotes = async () => {
  // const { notes } = db.data
  await db.read()
  const { notes } = db.data
  return notes
}

export const getNote = async (id) => {
  // const { notes } = db.data
  await db.read()
  db.chain = lodash.chain(db.data)
  const note = db.chain
  .get('notes')
  .find({ id })
  .value()

  return note
}

// const projects;
// const boards;
// const notes;
