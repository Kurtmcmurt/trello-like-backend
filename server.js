import express from 'express'
import { controls } from './app/endpoints/endpointControls.js'
import { checkDatabaseExists } from './utils/database.config.js'

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

controls(app)

// DATABASE CHECK
checkDatabaseExists()

// SERVER
app.listen(3000, () => {
  console.log('Listening on 3000')
})