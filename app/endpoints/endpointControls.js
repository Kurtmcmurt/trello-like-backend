import { AddNotes } from "../../utils/database.js"

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

  source.post('/note/add', (req, res, next) => {
    // console.log(req)
    res.send(req.body)
    AddNotes(req.body)
    // try {
    //   AddNotes(req.body.content)
    // } catch (error) {
    //   console.log([error, res])
    // }
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