import {
  addNotes,
  getNotes
} from '../../utils/database.js'

export const controls = (source) => {
  source.get('/', (err, res) => {
    try {
      res.status(200)
      res.json({ working: true })
      res.end()
    } catch (error) {
      console.log(err)
    }
  })

  source.get('/notes', (req, res, next) => {
    getNotes()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  })

  source.post('/note/add', (req, res) => {
    try {
      res.status(200)
      addNotes(req.body)
      res.json({ working: true })
      res.end()
    } catch (error) {
      res.send('Note not added: ', error)
    }
  })

  source.get('/users/:id', (err, res) => {
    try {
      res.status(200)
      res.json({ working: true })
      res.end()
    } catch (error) {
      console.log(err)
    }
  })

  source.post('/user/add', (err, res) => {
    try {
      res.status(200)
      res.json({ working: true })
      res.end()
    } catch (error) {
      console.log(err)
    }
  })

  source.put('/users/:id/update', (err, res) => {
    try {
      res.status(200)
      res.json({ working: true })
      res.end()
    } catch (error) {
      console.log(err)
    }
  })
}