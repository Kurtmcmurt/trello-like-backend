import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import { baseUrl } from '../config.js'

const defaultKeyValues = {
  notes: [],
  boards: [],
  projects: [],
  users: [],
}
// Use JSON file for storage
const file = join(baseUrl, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

export async function checkDatabaseExists() {
  try {
    // Read data from JSON file, this will set db.data content
    await db.read()
    
    // If file.json doesn't exist, db.data will be null
    // Set default data
    db.data = db.data || { ...defaultKeyValues }
    
    await db.write()
  } catch (error) {
    console.log(error);
  }
}
